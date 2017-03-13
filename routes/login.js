const express = require('express');
const path = require('path');
const router = express.Router();
const mysql = require('../mysql');
const crypto = require('crypto');

router.get('/', (req, res) => {
    if (req.session.login) {
        res.redirect('/admin');
        return;
    }
    if (req.cookies.hash) {
        mysql.query("select * from admin where hash=?", [req.cookies.hash], (result) => {
            if (result.length) {
                req.session.login = true;
                res.redirect('/admin');
            } else {
                res.sendFile(path.resolve("./views/admin/login.html"));
            }
        })
    } else {
        console.log(1);
        res.sendFile(path.resolve("./views/admin/login.html"));
    }
});

router.get('/logout', (req, res) => {
    req.session.login = null;
    res.clearCookie('hash', {path: '/'});
    res.redirect('/login');
});
router.post('/check', (req, res) => {
    console.log(req.body)
    const hash = crypto.createHash('md5');
    hash.update(req.body.password);
    const password = hash.digest('hex');

    mysql.query("select * from admin where user=? and password=?", [req.body.userName, password], (result) => {
        if (result.length) {
            if (req.body.remember) {
                res.cookie('hash', result[0].hash, {expires: new Date(Date.now() + 7 * 24 * 3600 * 1000), path: '/'});
            }
            req.session.login = true;
            res.json('ok');
        } else {
            res.json('err');
        }
    })
});

module.exports = router;

