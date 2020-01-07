var con=require('./Db')
const express=require('express')
const app=express();
const cors=require('cors')
const bodyparser=require('body-parser')

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({'extended':false}))

app.get('/record',function(req,res){
    
    var str="select count(*) as count from employee";
    con.query(str,function(err,data){
        if(err) throw err;
        else{
            console.log(data[0].count)
            res.send((data[0].count).toString())

        }
    })
})
app.post('/add',function(req,res){
    console.log(req.body)
    
    var fname=req.body.fname;
    var lname=req.body.lname;
    var address=req.body.address;
    var email=req.body.email;
    var password=req.body.password;
    var gender=req.body.gender;
    var dob=req.body.dob;

    var sql="insert into employee(fname,lname,address,email,password,gender,dob) values ?";


    var value=[
        [fname,lname,address,email,password,gender,dob]
    ];


   // var str="insert into employee set ?";
    con.query(sql,[value],function(err,data){
        if(err) throw err;
        else{
            console.log(data);
        }
    })
})
app.get('/loginSuccess',function(req,res){
    res.send("successfully Login");
})
app.post('/login',function(req,res){
    console.log("comming data"+req.body)
    var sql="select * from employee where email='"+req.body.email+"' and password='"+req.body.password+"'";
    console.log(sql);
    con.query(sql,(err,data)=>{
        if(err)
        {
            console.log("Record NOt found")
            res.status(400)
        }
        else{
            // if(data[0].length){
                console.log(data);
                res.status(200);
                res.send(data)
            
            // else
            //     console.log("record not found")
           // res.redirect('/loginSuccess')
        }
    })
})

app.listen(5000,function(){
    console.log("server listening on port 5000")
})