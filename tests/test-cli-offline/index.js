/* globals describe */

'use strict'

var fs = require('fs')

describe('cli-offline', () => {
  var tests = fs.readdirSync(__dirname)
  tests.filter(file => {
    if (file === 'index.js') {
      return false
    } else {
      return true
    }
  }).forEach(file => {
    require('./' + file)
  })
})
