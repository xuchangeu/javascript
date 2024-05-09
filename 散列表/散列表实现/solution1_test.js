import HashTable from "./solution1.js";
import fsa from "node:fs/promises";
import os, { EOL } from "node:os"
import path from "node:path";


const filePath = path.join("C://", "Users", "ASUS", "Desktop",
    "coding", "javascript", "散列表", "散列表实现", "data")

try {
    console.time("read-data");
    const fd = await fsa.open(path.join(filePath), "r");
    const buffer = await fd.readFile()
    const str = buffer.toString()
    const strArr = [];
    let temp = ""
    for(let i=0; i<str.length; i++) {
        const code = str.charCodeAt(i);
        if(code == 13) {
            strArr.push(temp);
            temp = "";
        }else if(code !== 10){
            temp += str[i];
        }
    }
    fd.close()
    
    console.log(strArr.length == Math.pow(10, 7))
    console.timeEnd("read-data");

    let table = new HashTable();
    console.time("set-data");
    for(let i=0; i<strArr.length; i++) {
        table.set(strArr[i], strArr[i]);
    }
    console.timeEnd("set-data");


    
} catch (err) {
    console.log(`error -> ${err}`)
}

