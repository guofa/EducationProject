let express = require('express');
let route= express.Router();
let Student=require('../model/Student');
let studentDB=require('../db/studentDB');

//查询所有
route.get('findAll',(req,resp)=>{
	studentDB.findAll().then((data)=>{
		resp.send(data);
	}).catch((error)=>{
		resp.send(error);
	})
})

module.exports=route;