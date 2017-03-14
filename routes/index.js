const express = require('express');
const router = express.Router();
const path=require('path');
const mysql = require('../mysql');

//首页
router.get('/',(req,res)=>{
    res.sendFile(path.resolve('./views/index/home.html'))
});

// 品牌介绍
router.get('/brand',(req,res)=>{
    res.sendFile(path.resolve('./views/index/brand.html'))
});

//晋韵文化
router.get('/culture',(req,res)=>{
    res.sendFile(path.resolve('./views/index/culture.html'))
});

//泥人
router.get('/clay',(req,res)=>{
    res.sendFile(path.resolve('./views/index/clay.html'))
});

//剪纸
router.get('/papercut',(req,res)=>{
    res.sendFile(path.resolve('./views/index/papercut.html'))
});
//雕塑
router.get('/sculpture',(req,res)=>{
    res.sendFile(path.resolve('./views/index/sculpture.html'))
});

//旅游
router.get('/tour',(req,res)=>{
    res.sendFile(path.resolve('./views/index/tour.html'))
});
//联系我们
router.get('/contact',(req,res)=>{
    res.sendFile(path.resolve('./views/index/contact.html'))
});
router.post('/contact', (req, res)=> {
    mysql.query('insert into message (name,phone,email,content) values(?,?,?,?)',
        [req.body.name, req.body.phone, req.body.email,req.body.content], (data)=> {
                res.json(data.insertId);
        });
});
module.exports=router;