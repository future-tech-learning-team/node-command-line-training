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

switch (subCommand) {
    case 'add': {
        addFile(argvs);
    }
        break;
    case 'update': {
        updateFile(argvs);
    }
        break;
    case 'move':
    case 'copy': {
        copyOrMoveFile(argvs);
    }
        break;
    case 'delete': {
        deleteFile(argvs);
    }
        break;
    default:
        console.log('未识别指令');


}
//test-cli add --fileName=a.md --content=传入的内容
function addFile(argvs) {
    const fileName = argvs.fileName;
    const processPath = process.cwd();
    const filePath = path.join(processPath, fileName);
    const content = argvs.content;
    fs.writeFileSync(filePath, content);
}
//test-cli update --fileName=a.md --content=修改的内容A 
function updateFile(argvs) {
    const fileName = argvs.fileName;
    const processPath = process.cwd();
    const filePath = path.join(processPath, fileName);
    const content = argvs.content;
    if (content && content != '') {
        if(fs.existsSync(filePath)){
            fs.readFile(filePath, (err, data) => {
                if (err) throw err;
                console.log(data);
                data += content;
                fs.writeFileSync(filePath, data);
            });
        }else{
            fs.writeFileSync(filePath, content);
        }
    }
}
//test-cli copy --fileName=a.md --to=c.md
//test-cli move --fileName=a.md --to=d.md
function copyOrMoveFile(argvs) {
    const fileName = argvs.fileName;
    const processPath = process.cwd();
    const filePath = path.join(processPath, fileName);
    const toPath = path.join(processPath, argvs.to);
    let handleFun = argvs._[0] === 'copy' ? fs.copyFileSync : fs.renameSync;
    if (fs.existsSync(filePath)) {
        handleFun(filePath, toPath)
    } else {
        console.log('复制的文件不存在')
    }
}
//test-cli delete --fileName=c.md
function deleteFile() {
    const fileName = argvs.fileName;
    const processPath = process.cwd();
    const filePath = path.join(processPath, fileName);
    if (fs.existsSync(filePath)) {
        let files = [];
        if (fs.statSync(filePath).isDictory) {
            files = fs.readdirSync(filePath);
            // console.log('1111', files)
            files.forEach(itemPath => {
                const tempPath = path.join(filePath, itemPath);
                // console.log('fs:' + fs.statSync(tempPath));
                if (fs.statSync(tempPath).isDictory) {
                    deleteFile(tempPath);
                } else {
                    fs.unlink(tempPath);
                }
            });
        } else {
            fs.unlink(filePath);
        }

    } else {
        console.log('删除的文件不存在');
    }
}
function makeDirs(path) {

}
