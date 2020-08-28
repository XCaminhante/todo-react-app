const Assembly = require('../../assembly')

options = {}

Assembly.buildUserAssets('../public/',options)
  .then(() => console.log('/public build done'))
  .catch((e) => console.error(e))
Assembly.buildUserAssets('./',options)
  .then(() => console.log('/src build done'))
  .catch((e) => console.error(e))