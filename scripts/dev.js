const fs = require('fs-extra');


function saveCommands(name, pluginCommands) {

  let jsonPath = process.cwd();
  var index = jsonPath .lastIndexOf("\/");
  jsonPath = jsonPath.substring(0, index + 1);
  jsonPath += 'shiyj-node-command-line/scripts/commands.json';
  console.log('jsonPath:',jsonPath);
  let commands = require(jsonPath);
  const plugin = {
    name: name,
    commands: pluginCommands
  }
  console.log('saveCommands', commands);
  const content = appendLine(commands, plugin);
  fs.writeJson(jsonPath, content, err => {
    if (err) {
      console.error(err);
      return
    }
    console.log('注册成功!')
  })
}


function appendLine(commands, plugin) {
  console.log('appendLine_commands:',plugin.commands)
  for (const key in plugin.commands) {
    console.log('appendLine_key:',key)
    if(commands[key]){
      console.log(`${key}方法被覆盖了,请联系开发人员`);
    }
    commands[key] = plugin.name
  }
  return commands
}

module.exports= {
  saveCommands:saveCommands
}

