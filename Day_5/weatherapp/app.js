// const request =require('request')
// const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast.js')

// // const url = 'http://api.weatherstack.com/current?access_key=ac25792054d8a873b8e529047cf2f76c&query='

// // request({url : url , json :true},(error,response) =>{
// //     //const data =JSON.parse(response.body)
// //     //console.log(data.current)

// //     if(error){
// //         console.log('unable to cpnnect')

// //     }else if(response.body.error){
// //         console.log('Something went wrong')

// //     }else {
// //         console.log('the current temp is' + response.body.current.temperature + '%' + 'there are' + response.body.current.precip + 'SSof rain')

// //     }


// // }

// // )

// // const url ='https://api.maptiler.com/data/6b1f895c-13b5-4a84-a210-fab9c89ab3ed/features.json?key=MD4Zt1DScKgwKYriAvJr'

// // request({url : url , json:true}, (error ,response) =>{
// // const data = response.body
// // console.log(JSON.stringify(response.body))
// // console.log(data.features.geometry)


// // }
// // )


// // const getcode = (address,callback) =>{ 

// // const url ='https://api.maptiler.com/data/6b1f895c-13b5-4a84-a210-fab9c89ab3ed/features.json?key=MD4Zt1DScKgwKYriAvJr/' + address + '.json'

// // request({url : url ,json : true},(responce,error) => {
// //     if (error){
// //         callback('Unable to find location service', undefined )
// //     }else if (responce.body.geometry.length ===0)
// //     {
// //         callback('Unable to find ',undefined)
// //     }else {
// //         callback (undefined ,{ 
// //             latitude: responce.body.features.geometry[1].coordinates[0],
// //             longitude: responce.body.features.geometry[1].coordinates[1],
// //             location :responce.body.features[0],id
// //         })

// //     }
// // }
// // )

// // }


// // getcode (-85.1587942461094,50.5587658412932,(error,data) =>{
// //     console.log('Error',error)
// //     console.log('Data',data)
// // })

// forecast(18.5204,73.8567,(error ,data) =>{
//     console.log('Error',error)
//     console.log('Data',data)


// }
// )


const forecast = require('./utils/forecast')
const geocode=require('./utils/geocode')
const address = process.argv[2]
 
if(!address){
   console.log(' provide an data')
}else{
   geocode(address,(error,{latitude,longitude,location}={})=>{
      if(error){
         return console.log(error)
      }
      forecast(longitude,latitude,(error,forecastdata)=>{
         if(error){
            return console.log(error)
         }
         console.log(location)
         console.log(forecastdata)
      })
   })
 
}
 
console.log(process.argv)