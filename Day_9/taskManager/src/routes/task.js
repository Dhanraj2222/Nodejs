const express = require('express');
const taskRepo  = require('../repos/task-repo');
const { query } = require('../pool');

const router = express.Router();

router.get('/tasks' ,async(req,res) =>{
    const task = await taskRepo.find();

    res.send(task);
});



// router.post('/tasks', async(req,res) =>{
//     const{taskdec,taskstaus} = req.body;
//     const task = await taskRepo.insert(taskdec,taskstaus);

//     res.send(task);


// }); 

router.post('/tasks', async (req, res) => {
  
    const{taskdec,taskstatus}=req.body;
    const task = await taskRepo.insert(taskdec,taskstatus);
      res.send(task);
    });





module.exports = router;

