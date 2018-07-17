exports.indexPage = (req, resp) => resp.render('index_page', {title: 'Регистрация'});
exports.resultPage = (req, resp) => resp.render('result_page', {title: 'Результат'});

exports.registerForm = function(req, resp){

    const formBody = {

        login: req.body.login,
        email: req.body.email,
        username: req.body.username,
        phone: req.body.phone

    };

    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    axios.post('http://localhost:8080/sign_up', formBody, axiosConfig)
         .then(res => {
             console.log("response: " + res);
             resp.redirect('/result');
         })
        .catch(err => {
            console.error("error: " + err);
        })

};