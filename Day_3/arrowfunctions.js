// const square = (x) => {
//     return x * x
// }

// console.log(square(9))


// const session = {
//     name : "joineeParty",
//     joineelist : ['dhaneraj','sushant','gaurav'],
    
//     printjoineeList (){
//         console.log('the new joinners' + this.name)

//         this.joineelist.forEach (function (joinee){
//             console.log( joinee +  'is our new joinner' + this.name)
//         })

//     }
// }

// session.printjoineeList()


const task =  {
    task : [{
        text : 'palying football',
        cs: 'completed'
    },

    {text : 'plaing criket',
        cs:'completed'

    },
    { text:'make bat',
        cs :'Incompleted'
    
    }] ,
    
    tasktodo () {
        return this.task.filter((task) =>task.completed === false)
    }
    
}

console.log(task.text);

