const pool = require('../pool');
const toCamelCase = require('./utils/tocamelcase.js');

class userRepo{
    
static async insert(name,age){
    const { rows , } = await pool.query('INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *;',
        [name, age]);
    return rows[0];
}


static async find(){
    const { rows } = await pool.query('SELECT * from users;');
   
   return rows;
}


static async update(id,name,age){
    const{ rows } = await pool.query(
      'UPDATE users SET name = $1, age = $2 WHERE id = $3 RETURNING *;',
      [name,age,id]
    );
    
    return rows[0];

  }
  
  static async delete(id){

    const { rows }=await pool.query('DELETE FROM users WHERE id = $1 RETURNING *;',
    [id]
    );
 
 return rows[0];
}

}
module.exports = userRepo;



