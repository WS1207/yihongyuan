const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const fs = require('fs');
const async = require('async');
const mysql = require('../mysql');

//1欢迎页
router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/admin/welcome.html'))
});

router.post('/txt', upload.single('wangEditorH5File'),(req, res)=>{
    var o=fs.createWriteStream('public/images/'+req.file.originalname);
    fs.createReadStream(req.file.path).pipe(o);
    o.on('finish',function () {
        fs.unlink(path.resolve(req.file.path))
    })
    res.end('/images/'+req.file.originalname);
})

//2管理员管理
//信息
router.get('/manage/message', (req, res) => {
    res.sendFile(path.resolve('./views/admin/manage.html'))
});
/////////查询////////////////////////
router.post('/user/select',(req,res)=>{
    mysql.query('select * from admin',[],(data)=>{
        res.json(data);
    });
});
/////////修改///////////////////////////////////
router.post('/user/update',(req,res)=>{
    mysql.query('update admin set user=? , password=? , hash=? , ps=? ',[req.body.user,req.body.password,req.body.hash,req.body.ps],(data)=>{
        res.json('ok');
    });
});

//3标题管理
router.get('/culture/heading', (req, res) => {
    res.sendFile(path.resolve('./views/admin/heading.html'))
});
router.get('/culture/essay', (req, res) => {
    res.sendFile(path.resolve('./views/admin/essay.html'))
});

//////////////////5剪纸管理//////////////////////////////////////////
router.get('/paperCut', (req, res) => {
    res.sendFile(path.resolve('./views/admin/paperCut.html'))
})
//剪纸图片上传
router.post('/upload', upload.single('file'), (req, res) => {
    async.series([
        function (callback) {
            var o = fs.createWriteStream('public/images/' + req.file.originalname);
            fs.createReadStream(req.file.path).pipe(o);
            callback(null)
        }, function (callback) {
            fs.unlink(path.resolve(req.file.path));
            callback(null);
        }, function () {
            res.end('ok')
        }
    ])
});
//查找
router.post('/paperCon', (req, res) => {
    mysql.query('select * from papercut', [], function (data) {
        res.json(data);
    })
});
//刪除
router.post('/paperdel', (req, res) => {
    mysql.query('delete from papercut where id = ?',
        [req.body.id], function (data) {
            res.json('ok');
        })
});
//添加
router.post('/add', (req, res) => {
    mysql.query('INSERT INTO papercut (title,content,url,rec) VALUES (?,?,?,?) ', [req.body.title,req.body.content,req.body.url, req.body.rec], function (data) {
        res.json('ok');
    })
});
//修改
router.post('/paupdate',(req,res)=>{
    if(req.body.index==`${req.body.index}`){
        mysql.query(`UPDATE papercut SET ${req.body.index}=? where id=?`, [req.body.value,req.body.id],function (data) {
            console.log(data)
        })
    }
})
//推荐位
router.post('/paperCon/rec', (req, res) => {
    console.log(req.body);
    mysql.query('update papercut set rec=? where id=?', [req.body.rec,req.body.id], function (data) {

    })
});

//6视频管理
router.get('/tour/video', (req, res) => {
    res.sendFile(path.resolve('./views/admin/video.html'))
});
router.get('/getVideo', (req, res)=> {
    var sql="select * from view";
    mysql.query(sql,[], function (data) {
            res.json(data);
    })
});
router.get('/addVideo', (req, res)=> {
    var sql="insert into view (id,video,img) values (null,'','') ";
    mysql.query(sql,[], function (err,data) {
        if(err){
            res.json(err)
        }else{
            res.json(data.insertId);
        }
    })
});
router.post('/delVideo', (req, res)=> {
    var sql="delete from view where id=?"
    console.log(req.body);
    mysql.query(sql,[req.body.id], function (data) {
            res.json(200);
    })
});
router.post('/chVideo', (req, res)=> {
    var sql="update view set video=? where id=?";
    console.log(req.body);
    mysql.query(sql,[req.body.video,req.body.id], function (data) {
        res.json(200);
    })
});
//7产品管理
router.get('/tour/products', (req, res) => {
    res.sendFile(path.resolve('./views/admin/products.html'))
});

//8留言管理
router.get('/contact/message', (req, res) => {
    res.sendFile(path.resolve('./views/admin/message.html'))
});
router.get('/contact/message/name', (req, res) => {
    mysql.query('select * from message order by id desc', (data)=> {
        res.json(data);
    })
});
router.get('/contact/message/delete/:id', (req, res)=> {
    mysql.query('delete from message where id = ?',
        [req.params.id], function (data) {
            if (data) {
                res.redirect('/admin/contact/message');
            }
        })
});
router.get('/contact/message/:id', (req, res)=> {
    res.sendFile(path.resolve('./views/admin/message_detail.html'));
});
router.get('/contact/message/messagedetail/:id', (req, res)=> {
    mysql.query('select content from message where id = ?', [req.params.id], (result)=> {
        res.json(result);
    })
});
//9地址管理
router.get('/contact/location', (req, res) => {
    res.sendFile(path.resolve('./views/admin/location.html'))
});
router.get('/contact/all', (req, res) => {
    mysql.query('SELECT * FROM address', (data) => {
        res.json(data);
    })
});
//地址修改
router.post('/contact/update', (req, res) => {
    // console.log(req.body)
    mysql.query('UPDATE `address` SET `phone`=?,`email`=?,`add`=? WHERE id=?', [req.body.phone, req.body.email, req.body.address,req.body.id], (err, data) => {
        res.json('ok')
    })
});
//地址查找
router.get('/contact/all', (req, res) => {
    mysql.query('SELECT * FROM address', (data) => {
        res.json(data);
    })
});
//地址修改
router.post('/contact/update', (req, res) => {
    console.log(req.body)
    mysql.query('UPDATE `address` SET `phone`=?,`email`=?,`add`=? WHERE 1', [req.body.phone, req.body.you, req.body.qu], (err, data) => {
    })
});

//图片上传
router.post('/upload', upload.single('avatar'), (req, res) => {
    async.series([
            function (callback) {
                fs.createReadStream(req.file.path).pipe(fs.createWriteStream('uploads/' + req.file.originalname));
                callback(null)
            },
            function (callback) {
                fs.unlink(path.resolve(req.file.path));
                callback(null)
            }
        ], function () {
            console.log(req.file.originalname)
            res.end(req.file.path + req.file.originalname);
        }
    )
});
module.exports = router;