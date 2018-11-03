const lesson1TestScripts = [
  {
    add:{
      pureAdd:'test-cli add --fileName=a.md',
      addFileWithContent:'test-cli add --fileName=a.md --fileContent=helloWorld'
    },
    edit:{
      editFileContent:'test-cli edit --fileName=a.md --fileContent=helloNodejs',
      editFileName:'test-cli edit --fileName=a.md --newFileName=b.md',
      editFileContentAndFileName:'test-cli edit --fileName=b.md --fileContent=helloThisWorld --newFileName=c.md',
    },
    move:'test-cli move --filePath=/Users/jianghai/codes/FTLT/node-command-line-training/c.md --newFilePath=/Users/jianghai/codes/FTLT/node-command-line-training/lib/c.md',
    delete:'test-cli delete --filePath=/Users/jianghai/codes/FTLT/node-command-line-training/lib/c.md'
  }
]