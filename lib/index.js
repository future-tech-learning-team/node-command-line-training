#!/usr/bin/env node

const minimist = require('minimist');
const fs = require('fs');
const path = require('path');

const argvs = minimist(process.argv.slice(2));

const subCommand = argvs._[0];

switch (subCommand) {
    case 'add': {
        const fileName = argvs.fileName;
        const processPath = process.cwd();

        const filePath = path.join(processPath, fileName);

        const fileContent = argvs.fileContent;

        fs.writeFileSync(filePath, fileContent);

        break;
    }
    case 'edit': {
        const fileName = argvs.fileName;
        const processPath = process.cwd();

        const filePath = path.join(processPath, fileName);
        if(!fs.existsSync(filePath)){
            console.log('文件不存在');
            break;
        }

        const fileContent = argvs.fileContent;
        if(fileContent){
            fs.writeFileSync(filePath, fileContent);
        }

        const newFileName = argvs.newFileName;
        if(newFileName){
            const newFilePath = path.join(processPath, newFileName);
            fs.renameSync(filePath, newFilePath);
        }
        break;
    }
    case 'delete': {
        break;
    }
    case 'move': {
        break;
    }
    default: {
        console.log('未识别指令');
        break;
    }
}

