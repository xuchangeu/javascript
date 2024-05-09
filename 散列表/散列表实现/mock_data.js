//模拟生成 1b 条的数据，每条数据由 10 个字符组成, 生成内容写入 ./data 文件中

import Random from '../../utility/Random.js'
import fs from 'node:fs'
import { EOL } from 'node:os';
import fsp from "node:fs/promises"
import path from 'node:path';

const min = 97,
    max = 122;

function genRandomStr(){
    let str = ""
    let codes = []
    for(let i=0; i<10; i++) {
        codes.push(Random(min, max))
    }
    str = String.fromCharCode(...codes);
    return str;
}
console.time("mock-data");

const output = path.join("C://","Users","ASUS","Desktop",
    "coding","javascript","散列表","散列表实现", "data")

const descriptor = await fsp.open(output, 'w');
const lineNumber = Math.pow(10,7);
let outputStr = ""
for(let i=0; i<lineNumber; i++) {
    outputStr += genRandomStr() + EOL;
}
const writeErr = await descriptor.writeFile(outputStr);
if(writeErr) {
    console.log(`writeError -> ${writeErr}`);
}
await descriptor.close();

console.timeEnd("mock-data")

