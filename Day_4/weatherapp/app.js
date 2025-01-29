const request = require('request')
const geocode = require('./utils.geocode.js')
// const url = 'http://api.weatherstack.com/current?access_key=ac25792054d8a873b8e529047cf2f76c&query='

// request({url : url , json :true},(error,response) =>{
//     //const data =JSON.parse(response.body)
//     //console.log(data.current)

//     if(error){
//         console.log('unable to cpnnect')

//     }else if(response.body.error){
//         console.log('Something went wrong')

//     }else {
//         console.log('the current temp is' + response.body.current.temperature + '%' + 'there are' + response.body.current.precip + 'SSof rain')

//     }


// }

// )

const url ='https://api.maptiler.com/data/6b1f895c-13b5-4a84-a210-fab9c89ab3ed/features.json?key=MD4Zt1DScKgwKYriAvJr'

request({url : url , json:true}, (error ,response) =>{
const data = response.body
console.log(JSON.stringify(response.body))
console.log(data.features.geometry)


}
)