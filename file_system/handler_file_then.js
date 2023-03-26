import {promises as fs} from "fs";

export function handler_file_2(){
    fs.writeFile("test.txt", "aaaaa").then(()=>{
        console.log("File write success")
            fs.appendFile("test.txt", "\n data to append").then(() =>{
                fs.readFile("test.txt", "utf-8").then(data =>{
                    console.log(data)
                }).catch(err => {
                    console.log(err);
                })                    
            }).catch(err => {
                console.log(err);
            })
    }).catch(err =>{
        console.log(err);
    }) 
}