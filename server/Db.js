const mysql=require('mysql')

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Root@12345',
    database:'myDb'
});

con.connect(function(err){
    if(err) throw err;
    else{
        console.log("connected");
    }
});

module.exports=con;