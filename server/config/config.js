var path = require('path');

module.exports = {
  development: {
    alias: 'development',
    rootPath: path.normalize(__dirname + '/../..'),
    db: 'mongodb://localhost/tagr',
    port: process.env.PORT || 3030
  },
  production: {
    alias: 'production',
    rootPath: path.normalize(__dirname + '/../..'),
    db: 'mongodb://localhost/tagr',
    port: process.env.PORT || 8081
  },
  heroku: {
    alias: 'heroku',
    rootPath: path.normalize(__dirname + '/../..'),
    db: 'mongodb://rblanquer:eulersson@ds063725.mlab.com:63725/heroku_3b1zpcq7',
    port: process.env.PORT || 80
  }
}