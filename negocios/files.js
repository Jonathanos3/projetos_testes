const fs = require('fs')

const readdir = (path) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, list) => {
      if (err) {
        reject(err)
      } else {
        resolve(list)
      }
    })
  })
}

module.exports = {
  readdir
}