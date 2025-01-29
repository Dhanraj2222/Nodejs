const https = require('https')
const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=ac25792054d8a873b8e529047cf2f76c&query=45,-75&units=f'

const request = http.request(url,(response) =>{

    let data =''

    response.on('data' , (chunk) => {
            data =data + chunk.toString()
            

    })

    response.on('end',() => {
        const simpledata = JSON.parse(data)
            console.log(simpledata)

    })

})

request.end()
