const path = require('path')
const express = require('express')
const { title } = require('process')

const { text } = require('stream/consumers')
const { error } = require('console')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const app =express()

const publicdirpath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templets/views')
const partialsPath = path.join(__dirname,'../templets/partials')

app.use(express.static(publicdirpath))

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req,res) =>{
    res.render('index' ,{
        title :'Weather APP',
        nam:'dhanraj'
    })

})

app.get('/about', (req,res) =>{
    res.render('about', {
        title: 'About me',
        nam: 'dhanraj'
    })
})

app.get('/help', (req,res) =>{
    res.render('help',{
        studyhelp: 'AMAM',
        dailyhelp: 'nami',
        title:'HELP',
        nam:'dhanraj'

    })
})

app.get('/products',(req,res) =>{
    if(!req.query.search){
        return res.send({
            error : 'Must Provided Search'
        })

    }
    console.log(req.query.search)
    res.send({
        products :[]
    }
    )
})







app.get('/weather', (req,res)=>{
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address!'
        })
    }

geocode(req.query.address,(error, {latitude, longitude, location} = {})=>{
    if(error){
        return res.send({error})
    }
    forecast(latitude, longitude, (error, forecastData)=>{
        if(error){
            return res.send({error})
        }

        res.send({
            forecast: forecastData,
            location,
            address: req.query.address
        })
    })
})
})


app.get('*',(req,res )=>{
    console.log('MY 404 pages')
    res.render('404',
     {
        title:404,
        nam :'dhanraj',
        errorMessage:'page not found'
     }
    )
})


app.listen(3000 ,() =>{
    console.log("Server Started successfully")
})