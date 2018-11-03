#!/usr/bin/env node

const minimist = require('minimist');
const fs = require('fs');
const path = require('path');

const argvs = minimist(process.argv.slice(2));

const subCommand = argvs._[0];

if (subCommand === 'add') {
    const fileName = argvs.fileName;
    const processPath = process.cwd();

    const filePath = path.join(processPath, fileName);

    const fileContent = argvs.fileContent;

    fs.writeFileSync(filePath, fileContent);
} else {
    console.log('未识别指令');
}


