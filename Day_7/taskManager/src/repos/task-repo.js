const pool = require('../pool');
const toCamelCase = require('./utils/tocamelcase')


class taskRepo{

    static async find(){
        const { rows } = await pool.query('SELECT * FROM task;');

        return rows;
    }


    

    
        static async insert(taskdec,taskstatus){
            const { rows } = await pool.query('INSERT INTO task (taskdec,taskstatus) VALUES ($1, $2) RETURNING *;',
                [taskdec,taskstatus]
            );
            return rows[0];
        }
    
















}


module.exports = taskRepo;