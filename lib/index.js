#!/usr/bin/env node


// console.log('测试指令成功');
// console.log('process.argv = ', process.argv);

const minimist = require('minimist');
const fs = require('fs');
const path = require('path');

const argvs = minimist(process.argv.slice(2));
let processPath = process.cwd();

if (argvs.processPath) {
  processPath = argvs.processPath
}

// console.log('argvs = ', argvs);
// console.log('test-cli....')

function add() {
  const { fileName, encoding, mode, flag } = argvs
  const filePath = path.join(processPath, fileName);
  const options = {
    encoding: encoding || 'utf8',
    mode: mode || '0o666',
    flag: flag || 'w'
  }
  fs.writeFileSync(filePath, '自定义文件内容', options);
}

function write() {
  const { fileName, data, newFileName } = argvs.data;
  const oldPath = path.join(processPath, fileName);
  const newPath = path.join(processPath, newFileName)
  fs.writeFileSync(oldPath, data)
  if (newFileName) {
    fs.renameSync(oldPath, newPath)
  }
}

function delete() {
  const fileName = argvs.fileName;
  const filePath = path.join(processPath, fileName);
  fs.unlinkSync(filePath);
}

function move() {
  const { fileName, newFileName } = argvs;
  const oldPath = path.join(processPath, fileName);
  const newPath = path.join(processPath, newFileName)
  fs.renameSync(oldPath, newPath)
}

const subCommand = argvs._[0];

switch(subCommand) {
  case 'add':
    add();
    break;
  case 'write':
    write();
    break;
  case 'delete':
    delete();
    break;
  case 'move':
    move();
    break;
  default:
    console.log('未识别指令');
    break
}
