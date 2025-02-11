exports.shorthands = undefined;


exports.up = (pgm) => {
    pgm.sql(`
        CREATE TABLE users(
        id SERIAL PRIMARY KEY ,
        name VARCHAR(50) NOT NULL ,
        age VARCHAR(50) NOT NULL
        );
    `);
};


exports.down = (pgm) => {
    pgm.sql(`
        DROP TABLE users;
        `);
};