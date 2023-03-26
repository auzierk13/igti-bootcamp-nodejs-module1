import {promises as fs} from "fs";

export async function handler_file_3(){
    try {
        await fs.writeFile("test.txt", "aaaaa");
        console.log("File write success")
        await fs.appendFile("test.txt", "\n data to append");
        const data  =  fs.readFile("test.txt", "utf-8");
        console.log(data);
    } catch(err){
        console.log(err);
    }
     
}