const express = require('express');
const path = require('path')
const router = express.Router();
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const fs = require('fs')
const async = require('async')
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
router.get('/manage', (req, res) => {
    res.sendFile(path.resolve('./views/admin/manage.html'))
});
//修改密码
router.get('/manage/password', (req, res) => {
    res.sendFile(path.resolve('./views/admin/password.html'))
})

//3标题管理
router.get('/culture', (req, res) => {
    res.sendFile(path.resolve('./views/admin/heading.html'))
})
router.get('/culture/eassy', (req, res) => {
    res.sendFile(path.resolve('./views/admin/essay.html'))
})

//////////////////5剪纸管理//////////////////////////////////////////
router.get('/paperCut', (req, res) => {
    res.sendFile(path.resolve('./views/admin/paperCut.html'))
})
//剪纸图片上传
router.post('/upload', upload.single('file'), (req, res) => {
    async.series([
        function (callback) {
            var o = fs.createWriteStream('uploads/' + req.file.originalname);
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
            res.json('ok')
        })
});
//添加
router.post('/add', (req, res) => {
    mysql.query('INSERT INTO papercut (title,content,url,rec) VALUES (?,?,?,?) ', [req.body.title,req.body.content,req.body.url, req.body.rec], function (data) {
        console.log(data);
    })
});
//修改
router.post('/paupdate',(req,res)=>{
    mysql.query('UPDATE papercut set (title,content,url,rec) values(?,?,?,?)', [req.body.title,req.body.content,req.body.url, req.body.rec],function (data) {
        console.log(data);
    })
})

//////////////6视频管理/////////////////////////////////////////
router.get('/tour', (req, res) => {
    res.sendFile(path.resolve('./views/admin/video.html'))
})
//7产品管理
router.get('/tour/products', (req, res) => {
    res.sendFile(path.resolve('./views/admin/products.html'))
})


//8留言管理
router.get('/contact', (req, res) => {
    res.sendFile(path.resolve('./views/admin/message.html'))
})
//9地址管理
router.get('/contact/location', (req, res) => {
    res.sendFile(path.resolve('./views/admin/location.html'))
})


//图片上传
router.post('/upload', upload.single('avatar'), (req, res) => {
    //事件处理异步
    // var o=fs.createWriteStream('uploads/'+req.originalname)
    // fs.createReadStream(path.resovle(req.file.path)).pipe(o);
    // o.on('finish',function () {
    //     fs.unlink(path.resovle(req.file.path))
    // })
    //async处理异步
    async.series([
            function (callback) {
                fs.createReadStream(req.file.path).pipe(fs.createWriteStream('uploads/' + req.file.originalname))
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

})


// router.get('/news/:cat_id',function (req,res) {
//     res.end(req.param.cat_id)
// });
// router.get('/news/:cat_id/:news_id',function () {
//     res.end(''+req.param.cat_id+','+req.param.cat_id)
// })

module.exports = router;