// bilt in modiule (in chrome search for node js document)
const os=require("os")
console.log(os.cpus())
console.log(os.arch())  //x64
console.log(os.freemem())
// -----------------------------------
const f=require("fs")
//const d=f.readFileSync("./6jan.txt")  //whatever we write in this it converted into machine lang
const d=f.readFileSync("./6jan.txt",{encoding:"utf-8"}) //this is readable as by as it convert the machine lang to our normal language
console.log(d)

f.writeFileSync("./d2.txt","node is running in this") //create a file by it 
console.log("file is written by me")