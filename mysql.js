
const mysql=require('mysql');
const mysqlpool=mysql.createPool({
    host:'localhost',
    database:'project',
    user:'root',
    password:'',
    connectionLimit:1000
});
function pool(sql,para,fn){
    mysqlpool.getConnection((err,con)=>{
        if(para instanceof Array){
            con.query(sql,para,(err,res)=>{
                fn(res);
            });
        }else{
            con.query(sql,(err,res)=>{
                para(res);
            })
        }
    })
}
module.exports={
    query:pool
};