const app = require('./config/app_config');
const mongooseConfig = require('./config/database');

app.set('port', 8081);
mongooseConfig.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(app.get('port'), function () {
    console.log("Приложение запущено на порте " + app.get('port'));
});