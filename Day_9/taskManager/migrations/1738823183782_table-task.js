exports.up = pgm =>{
    pgm.sql(`
        CREATE TABLE task (
        id SERIAL PRIMARY KEY,
        taskdec VARCHAR(200) NOT NULL,
        taskstatus VARCHAR(50) NOT NULL

        );
        
        `);

};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE tasks;
        `);
};