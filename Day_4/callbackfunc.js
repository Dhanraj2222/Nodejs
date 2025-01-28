// setTimeout (() =>{
//     console.log("The message are arrived")

// },2000)


// const names =   ['sam','toshish','karan']

// const shortnames = names.filter((name) => {

//     return name.length <= 2 

// })



// const add =(a,b,callback) => {
//     setTimeout (() =>{
//         callback (a + b)
//     },3000)

// }

// add(20 ,6 , (sum) =>{
//     console.log(sum)
// }) 



const con =(x,y,callback) =>{
    setTimeout (()=>{
        callback (x * y)
    })
}


con (13 ,2 ,(res) =>{
    console.log(res)
})
