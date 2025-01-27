const chalk  = require('chalk')
const yargs =require('yargs')
const fs = require('fs')
const getNotes = require('./notes.js')

const yargs = require('yargs')
const { title } = require('process')

yargs.version('1.1.0')


yargs.command({
    command : 'add',
    describe : 'the Adding a note',
    builder : {
        title :{
            describe : 'note title',
            demandCommand : 'true',
            type    : 'string'

        },

        body :{
            describe : 'note body',
            demandOption :'true',
            type : 'string'

        }

    },

    handler : function (argv){
        notes.addnotes(argv.title,argv.body)
    }

})

yargs.command({
    command : 'list',
    describe : 'the listing a code ',
    handler : function (){
        console.log('listing a new code')
    }
})


yargs.command({
    command : 'read',
    describe :'the reading a code',
    handler : function(){
        console.log('reading a new code......')
    }
})


console.log(yargs.argv)