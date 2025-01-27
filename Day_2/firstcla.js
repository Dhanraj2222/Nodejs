const command = process.argv[2]

if(command === 'debug'){
    console.log("debugging a code")
    
}else if(command=== 'cancel'){
    console.log("terminate the execution")

}

console.log(process.argv)