const path = require('path')
const express = require('express')
const { title } = require('process')
const hbs = require('hbs')

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
        dailyhelp: 'nami'
    })
})






app.get('/weather',(req,res)=>{
    res.send({
        forecast:'rainy',
        location:'india'
    })
})


app.listen(3000 ,() =>{
    console.log("Server Started successfully")
})