//require('babel-polyfill');
var Student=require('../model/Student');
var studentDB=require('./studentDB');

//查询所有学生
studentDB.findAll().then(function(data){
	console.log(data);
}).catch(function(err){
	console.log("报错了:"+err);
})