require('./src/pool')
require('./index')
const taskRepo = require('./src/repos/task-repo')


// taskRepo.find.then((task)=>{
//     console.log(task)
//     return task.countDocuments({taskstatus :yes})
// }).then((result) =>{
//     console.log(result)
// }).catch((e) =>{
//     console.log(e)
// })

// const dispalyTask = async (id ) =>{
//     const task = await ask.findByPk(id);
    

//     return [0]



// }

// dispalyTask('2').then((count) =>{
//     console.log(count)
// })