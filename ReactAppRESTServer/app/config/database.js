const mongooseConfig = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/react_app_db';
mongooseConfig.connect(mongoDB);
mongooseConfig.Promise = global.Promise;

module.exports = mongooseConfig;