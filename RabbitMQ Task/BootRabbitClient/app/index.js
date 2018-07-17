const app = require('./app_config');
app.set('port', 8083);

app.listen(app.get('port'), function () {
    console.log("Приложение запущено на порте " + app.get('port'));
});