const express = require('express');
const path = require('path');
const router = express.Router();
<<<<<<< HEAD
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const fs = require('fs');
const async = require('async');
const mysql = require('../mysql');
// async.series([
//     function (callback) {
//         setTimeout(function () {
//
//         }, 1000)
//     }
// ], function (err, data) {
//     console.log(data)
// })
//async   异步编程
=======
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const fs = require('fs')
const async = require('async')
const mysql = require('../mysql');
>>>>>>> 629398b2e31a59908d1ed6f9c2a8055c1201e919

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

//修改密码
router.get('/manage/password', (req, res) => {
    res.sendFile(path.resolve('./views/admin/password.html'))
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

<<<<<<< HEAD
//6视频管理
router.get('/tour/video', (req, res) => {
=======
//////////////6视频管理/////////////////////////////////////////
router.get('/tour', (req, res) => {
>>>>>>> 629398b2e31a59908d1ed6f9c2a8055c1201e919
    res.sendFile(path.resolve('./views/admin/video.html'))
})
//7产品管理
router.get('/tour/products', (req, res) => {
    res.sendFile(path.resolve('./views/admin/products.html'))
})
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
    console.log(req.params);
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