#!/usr/bin/env node


// console.log('测试指令成功');
// console.log('process.argv = ', process.argv);

const minimist = require('minimist');
const fs = require('fs');
const path = require('path');

const argvs = minimist(process.argv.slice(2));

// console.log('argvs = ', argvs);
console.log('test-cli....')

const subCommand = argvs._[0];

if (subCommand === 'add') {
    const fileName = argvs.fileName;
    const processPath = process.cwd();

    const filePath = path.join(processPath, fileName);

    fs.writeFileSync(filePath, '自定义文件内容');
} else {
    console.log('未识别指令');
}


