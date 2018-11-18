#!/usr/bin/env node
/**
 * Created by shiyunjie on 2018/11/4.
 */
var minimist = require('minimist');
var argv = minimist(process.argv.slice(2));
var commandArr = argv._;


function chooseCommand() {
  console.log('==欢迎使用syj-cli命令行工具==');
  try {
    var method = commandArr[0];
    var path = 'shiyj-node-command-line-' + method;
    console.log(path);
    var command = require(path);
    eval('console.log("执行命令")');
    eval('command('+JSON.stringify(argv)+')');
  } catch (e) {
    console.log('==出错了，请检查命令是否正确==',e);
  }
}

chooseCommand();





