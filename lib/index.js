#!/usr/bin/env node
/**
 * Created by shiyunjie on 2018/11/4.
 */
var minimist = require('minimist');
var path = require('path');
var command = require('./command');
var method = require('./method');
var argv = minimist(process.argv.slice(2));
var cwd = process.cwd();
var commands = argv._;

var fileName = argv.file || 'file.md';
var newFileName = argv.newFile || 'file.md';
var content = argv.content || '---';
var tag = argv.tag || '';
var pathName = path.join(cwd, fileName);
var newPath = path.join(cwd, newFileName);
function chooseCommand() {
  console.log('==欢迎使用syj-cli命令行工具==');
  if (commands.indexOf(command.add) !== -1) {
    method.add(pathName, content);
  } else if (commands.indexOf(command.append) !== -1) {
    method.append(pathName, content);
  } else if (commands.indexOf(command.rename) !== -1) {
    method.rename(pathName,newPath)
  } else if (commands.indexOf(command.move) !== -1) {
    method.move(pathName, tag);
  } else if (commands.indexOf(command.remove) !== -1) {
    method.remove(pathName);
  }
}

chooseCommand();





