#!/usr/bin/env node


// console.log('测试指令成功');
// console.log('process.argv = ', process.argv);

const minimist = require('minimist');
const fs = require('fs-extra');
const argv = minimist(process.argv.slice(2));
const commandArr = argv._;


function chooseCommand() {
  console.log('==欢迎使用syj-cli命令行工具==');
  try {
    const method = commandArr[0];
    console.log(path);
    fs.readJson('./scripts/commands.json', (err, commands) => {
      if (err) {
        console.error(err)
        return
      }

      const command = require(commands[method]);
      eval('console.log("执行命令")');
      command[method]();

    })

  } catch (e) {
    console.log('==出错了，请检查命令是否正确==', e);
  }
}

chooseCommand();



