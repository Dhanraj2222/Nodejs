const fs = require('fs')


const getnotes = function (){

    return 'Loading Your notes'

}


const addnotes = function(title,body){
const notes = loadnotes ()

}



const loadnotes =function(){


    const dataBuffer = fs.readFileSync('')

    

}

module.exports = {
    getNotes : getnotes,
    addNotes : addnotes
}