const { default: chalk } = require('chalk')
const fs = require('fs')


const getnote = function (){

    return 'Loading Your notes'

}


const addnote = function(title,body){
const notes = loadnotes ()
const duplicatenotes = notes.filter(function (note){
    return note.title === title 

})

    if(duplicatenotes.length === 0){
        notes.push({
            title : title,
            body :  body
        })


        savenotes(notes)
        console.log('new note added')
        
    }else{
        console.log('title is already taken')
    }

}

const removenote =function(title){
    const notes =loadnotes ()
    const notesKeep = notes.filter(function(note){
        return note.title !== title

    })

    savenotes(notesKeep)

}





const loadnotes =function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }

    

}

const savenotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}
const listnote = () =>{
    const notes = loadnotes()
    console.log(chalk.inverse('Your Notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })

   


}

const readnote = (title) =>{
    const notes = loadnotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)

    }
    else{
        console.log(chalk.inverse('note can not find'))

    }

}

module.exports = {
    getNotes : getnote,
    addNotes : addnote,
    removeNotes : removenote,
    saveNotes : savenotes,
    loadNotes : loadnotes,
    listNote : listnote,
    readNote :readnote
}   