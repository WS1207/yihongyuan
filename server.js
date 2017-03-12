const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const compression=require('compression');
const adminRouter=require('./routes/admin');
const indexRouter=require('./routes/index');
const loginRouter=require('./routes/login');
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("./public"));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use('/',indexRouter);
app.use('/login',loginRouter);

app.use('/admin',(req,res,next)=>{
    if(req.session.login){
        next();
    }else {
        res.redirect('/login');
    }
})

app.use('/admin',adminRouter);

app.listen(3000,()=>{
    console.log('服务已经启动');
});
//
// process.on('uncaughtException', (exception) => {
//     console.log('error');
// });




