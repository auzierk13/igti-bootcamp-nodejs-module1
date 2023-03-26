import fs from "fs";

export function handler_file_1(){
    fs.writeFile("test.txt", "aaaaa", function(err){
        if(err){
            console.log(err);
        }else{
            console.log("File write success")
            fs.appendFile("test.txt", "\n data to append", (err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    fs.readFile("test.txt", "utf-8", function(err, data){
                        if(err){
                            console.log(err);
                        }else{
                            console.log(data)
                        }
                    })
                }
                
            })
        }
    })
}