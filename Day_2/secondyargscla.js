const yargs = require('yargs')

yargs.version('1.1.0')

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