let pool=require('./pool');

module.exports={
	findAll(){
		var sql="select * from Student";
		return pool.execute(sql);
	}
}