const mongooseConfig = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/react_app_db';
mongooseConfig.connect(mongoDB, {useNewUrlParser: true});
mongooseConfig.Promise = global.Promise;

module.exports = mongooseConfig;