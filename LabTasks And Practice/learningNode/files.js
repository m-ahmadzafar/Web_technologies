// in this tut, we will learn how to use file read and write ops.

const fs = require('fs');
const path = require('path');

console.log('Current working directory:', process.cwd());


// fs.readFile('./files/lorem.txt', 'utf-8',(err, data) => {
//     if (err) throw err;
//     console.log(data.toString());

// })

//now using path to avoid path issues
// fs.readFile(path.join(__dirname, 'files', 'lorem.txt' ), 'utf-8',(err, data) => {
//     if (err) throw err;
//     console.log(data.toString());

// })


// NOTE: node is asynch and does run stuff before if it can.
//console.log("hello. i run before readFile");

//to write in the file
// fs.writeFile(path.join(__dirname, 'files', 'newFile.txt' ), "This is the data that will be written in the file",(err) => {
//     if (err) throw err;
//     console.log('write complete');

//     // note that if we want to append properly in a file that is just created with the writeFile,
//     // its better to put the appendFile inside the writeFile method.
//     fs.appendFile(path.join(__dirname, 'files', 'newFile.txt' ), "This is the NEW data that will be APPENDED to the file",(err) => {
//         if (err) throw err;
//         console.log('append complete');
    
//     })
// })

// note, if the append is used with a non-existent file name, 
//it will create the new file like writeFile method.

// to avoid the above code which is starting to look 
//like callback hell, we use asych await

const fsPromises = require("fs").promises;

const fileOps = async () => { //arrow function
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'lorem.txt' ), 'utf-8'); 
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'files', 'PromiseNewFile.txt' ), "This is the data that will be written in the file using the promise.")
    } catch (err){
        console.log(err); //print error
    }

};

fileOps();