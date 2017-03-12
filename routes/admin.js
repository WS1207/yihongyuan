const express = require('express');
const path = require('path')
const router = express.Router();
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const fs = require('fs')
const async = require('async')
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

//1欢迎页
router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/admin/welcome.html'))
})


//2管理员管理
//信息
router.get('/manage', (req, res) => {
    res.sendFile(path.resolve('./views/admin/manage.html'))
})
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

//5剪纸管理
router.get('/paperCut', (req, res) => {
    res.sendFile(path.resolve('./views/admin/paperCut.html'))
})

//6视频管理
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