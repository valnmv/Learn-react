const mongoose = require('mongoose');

module.exports.connect = (uri) => {
  mongoose.connect(uri);
  // plug in the promise library:
  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', (err) => {
    console.error(err);  /* eslint no-console: 0 */
    process.exit(1);
  });

  // load models
  require('./item');
};
