
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
var multer  = require('multer')
var upload = multer({ 
    storage:multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
})
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.post('/profile',upload.single('book'),(req,res,next)=>{
    console.log(req.file);
    res.send('上传成功！')
    next();
})
app.get('/profile',(req,res,next)=>{
    res.send('请使用post发送该请求页面！')
    next();
})
app.listen(port, function () {
    console.log("server started on port " + port)
})
