exports.shorthands = undefined;


exports.up = (pgm) => {
    pgm.sql(`
        CREATE TABLE users(
        id SERIAL PRIMARY KEY ,
        username VARCHAR(255) NOT NULL ,
        password VARCHAR(255) NOT NULL
        );
    `);
};


exports.down = (pgm) => {
    pgm.sql(`
        DROP TABLE users;
        `);
};