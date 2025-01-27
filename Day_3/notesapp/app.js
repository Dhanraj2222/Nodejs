const chalk  = require('chalk')
const yargs = require('yargs')
const fs = require('fs')
const getNotes = require('./notes.js')
const addNotes = require('./notes.js')
const  removeNotes = require('./notes.js')
const saveNotes = require('./notes.js')
const listNote = require('./notes')
const readNote = require('./notes.js')

const { title } = require('process')
const { type } = require('os')
const notes = require('./notes.js')

yargs.version('1.1.0')


yargs.command({
    command : 'add',
    describe : 'the Adding a note',
    builder : {
        title :{
            describe : 'note title',
            demandOption : 'true',
            type    : 'string'

        },

        body :{
            describe : 'note body',
            demandOption :'true',
            type : 'string'

        }

    },

    handler : function (argv){
        notes.addNotes(argv.title,argv.body)
    }

})


yargs.command({
    command : 'remove',
    describe : 'removing the note',
    builder : {
        title : {
            describe : 'note title',
            demandOption :'true',
            type :'string'
        }


    },
    handler : function (argv){
        notes.removeNotes(argv.title)

    }
})

yargs.command({
    command : 'list',
    describe : 'the listing a code ',
   
    handler : function (){
      notes.listNote()  
    }
})


yargs.command({
    command : 'read',
    describe :'the reading a code',
    builder :{
        title :{
            describe:'NoteTitle',
            demandOption:'true',
            type: 'string'
        }

    },
    handler : function(argv){
        notes.readNote(argv.title)
        
    }
})


console.log(yargs.argv)