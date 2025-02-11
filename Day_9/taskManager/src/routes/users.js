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

// router.get('/users/:id' , async (req,res) => {
//   const {id} = req.params;
//   const users = await UserRepo.findBypk(id,age)
//   if(users)
// {
//   res.send()
// } else{
//   res.sendStatus(404)
// }


// })


router.post('/users/login' , async(req,res)=>{

  try{

    const users = await findByName(req.body.name)

  }
  catch(e){

  }

})



      

module.exports = router;

