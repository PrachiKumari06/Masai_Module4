
/*
import {  writeFile } from "fs";
 writeFile("./b.txt","hello b you have been created by a.mjs ")
console.log("saved")
*/
//2.-----------------async callback function------------------------------------------------------
/*
import {  writeFile } from "fs";
writeFile("./b.txt","hii b you have been created by a.mjs ",()=>{    //async callback promis
console.log("saved")
})
*/

//3.-------------using of unlink----------------------------------------------------------
/*
import {  writeFile } from "fs";
import {unlink} from "fs/promises" //for 3rd one 
//if we don not want to write import unlink we can use await like await writeFile() and await unlink()
console.log("hi")
writeFile("./b.txt","hii you have been created by a.mjs ",()=>{    //show that it is non blocking 
console.log("saved")
})
console.log("bye")    //output hi bye then saved show in console because it take time to process 
unlink("./b.txt")  //async (and there is another :sync)
console.log("deleted")   //output: hi bye deleted saved
*/

//4.-----------------using of unlinkSync and writeFileSync------------------------------------------------------
/*
import { writeFileSync } from "fs";
import {unlinkSync} from "fs" //for 4th one 
console.log("hi")
writeFileSync("./b.txt","hii you have been created by a.mjs ") //here unlinkSync and writeFileSync did not block the system
console.log("saved")
console.log("bye")    
unlinkSync("./b.txt")  
console.log("deleted")   
*/
//5.----------------------------------------------------------------
//in a1.js