const request =require('request')

const url = 'http://api.weatherstack.com/current?access_key=ac25792054d8a873b8e529047cf2f76c&query=18.5204%C2%B0%20N,%2073.8567%C2%B0%20E'

request({url : url},(error,response) =>{
    const data =JSON.parse(response.body)
    console.log(data.current)

}

)