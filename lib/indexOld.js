//#!/usr/bin/env node
///**
// * Created by shiyunjie on 2018/11/4.
// */
//var minimist = require('minimist');
//var path = require('path');
//var commands = require('./command');
//var method = require('./method');
//var argv = minimist(process.argv.slice(2));
//var cwd = process.cwd();
//var command = argv._;
//
//var fileName = argv.file || 'file.md';
//var newFileName = argv.newFile || 'file.md';
//var content = argv.content || '---';
//var tag = argv.tag || '';
//var pathName = path.join(cwd, fileName);
//var newPath = path.join(cwd, newFileName);
//function chooseCommand() {
//  console.log('==欢迎使用syj-cli命令行工具==');
//  if (command.indexOf(commands.add) !== -1) {
//    method.add(pathName, content);
//  } else if (command.indexOf(commands.append) !== -1) {
//    method.append(pathName, content);
//  } else if (command.indexOf(commands.rename) !== -1) {
//    method.rename(pathName,newPath)
//  } else if (command.indexOf(commands.move) !== -1) {
//    method.move(pathName, tag);
//  } else if (command.indexOf(commands.remove) !== -1) {
//    method.remove(pathName);
//  }
//}
//
//chooseCommand();
//
//
//
//
//
