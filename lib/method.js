/**
 * Created by shiyunjie on 2018/11/4.
 */
var fs = require('fs-extra');

module.exports = {
  add: addFile,
  append: appendFile,
  rename: renameFile,
  remove: removeFile,
  move: moveFile
};

function addFile(filePath, content) {
  console.log('开始添加文件：');
  fs.outputFile(filePath, content, function (err) {
    if (err) {
      return console.error('错误！', err)
    }
    console.log('成功添加文件!')
  })
}

function appendFile(filePath, content) {
  console.log('开始编辑文件：', filePath, content)
  fs.readFile(filePath, 'utf8', function(err, data){
    if (err) {
      return console.error(err);
    }
    const text = data + content;

  fs.outputFile(filePath, text,function(err, data){
    if (err) {
      return console.error(err);
    }
    });
})
}

function renameFile(filePath, newPath) {
  console.log('开始重命名文件：')
  fs.copy(filePath, newPath, function (err) {
    if (err) {
      return console.error(err);
    }
    fs.remove(filePath, function (err) {
      if (err) return console.error(err)
      console.log('成功重命名文件!')
    })

  })
}

function removeFile(filePath) {
  console.log('开始删除文件：');
  fs.remove(filePath, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('成功删除文件!');
  })
}

function moveFile(source, tag) {
  console.log('开始移动文件：');
  fs.move(source, tag, function (err) {
    if (err) {
      return console.error('错误！', err);
    }
    console.log('成功移动文件!');
  })
}