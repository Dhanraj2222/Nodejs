const express = require('express');
const UserRepo = require('../repos/user-repo');

const router = express.Router();

router.get('/users', async (req, res) => {
  const users = await UserRepo.find();


  res.send(users);
});

router.post('/users', async(req, res) =>{
    const {name,age} = req.body;

    const users =await UserRepo.insert(name,age);

    res.send(users);
});


      
router.put('/users/:id', async (req, res) => {
        const{id}=req.params;
        const{  name,age }=req.body;
        const users = await UserRepo.update(id,name,age);
        if(users)
        {
          res.send(users);
        }
        else{
          res.sendStatus(404);
        }
        
      });

router.delete('/users/:id',async (req,res) =>{
    const{id} = req.params;
    const users = await UserRepo.delete(id);

    if(users){
        res.send(users);
    }
    else{
        res.sendStatus(404);

    }
});



      

module.exports = router;

