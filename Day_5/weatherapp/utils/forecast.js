// const request = require('request')

// const forecast = (latitude, longitude, callback) =>{
//     const url = 'http://api.weatherstack.com/current?access_key=ac25792054d8a873b8e529047cf2f76c&query=' + latitude + ',' + longitude + '&units=f'

//     request({url: url , json: true}, (error,responce) => {
//         if (error){
//             callback('unable to connect',undefined)

//         }else if (responce.body.error){
//             callback('unable to find location',undefined)

//         } else {
//             callback(undefined , 'todays is' + 'the current temp is' + response.body.current.temperature + '%' + 'there are' + response.body.current.precip + 'SSof rain')

//         }

//     }
//     )

// }

// module.exports = forecast



const request=require('request')


const forecast = (latitude, longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=ac25792054d8a873b8e529047cf2f76c&query='+latitude+','+longitude+''
    
    request({url, json:true}, (error, { body })=>{
        if(error){
            callback('Unable to connect to location services!', undefined)
        }
        else if(body.error){
            callback('Unable to find location.', undefined)
        }
        else{
            callback(undefined, body.current.weather_descriptions[0]  + 'todays is'  + 'the current temp is' + body.current.temperature + '%' + 'there are' + body.current.precip + 'SSof rain' )
        }
    })
}


module.exports=forecast