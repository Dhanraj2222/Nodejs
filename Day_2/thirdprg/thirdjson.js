const fs = require('fs')


const org = {
    name : 'cc',
    work : 'helthcare',
    origned : 'USA'
}

console.log(org)
//const orgJSON = JSON.stringify(org)

fs.writeFileSync('created.json',orgJSON)

const dataBuffer =  fs.readFileSync('created.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.origned)

