const Assembly = require('../../assembly')
const fs = require('fs')

options = {}

Assembly.buildUserAssets('./',options)
  .then(() => {
    fs.renameSync('./assembly.js','../public/assembly.js')
    console.log('build done') })
  .catch((e) => console.error(e))