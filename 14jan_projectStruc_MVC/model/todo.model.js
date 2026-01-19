import fs from "fs"
export const readData=()=>{
const data= fs.readFileSync("db.json","utf-8")
return JSON.parse(data)
}
export const writeData=(data)=>{
    fs.writeFileSync("db.json",JSON.stringify(data,null,2))
    }