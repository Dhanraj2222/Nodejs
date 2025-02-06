const express = require('express');
const usersRouter = require('./routes/users');
const taskRouter = require('./routes/task')

module.exports = () => {
  const app = express();

  app.use(express.json());
  app.use(usersRouter);
  app.use(taskRouter);

  return app;
};
