import React from "react";

export default class APIHelper extends React.Component{

    constructor(props, authToken){

        super(props);

        this.state = {
            apiURL: 'http://ae85b904.ngrok.io'
        };

        if (!(authToken === '')) {
            this.token = authToken;
        }else{
            this.token = '';
        }
    }

    getAllArtists () {

        return fetch(this.state.apiURL + '/artists/', {

            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                'x-access-token': this.token
            }

        })
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log("error occurred: " + error.message);
            throw error;
        });
    }

    createArtist (nickname, age) {

        let details = {

            'nickname': nickname,
            'age': age

        };
        let formBody = APIHelper.getFormBody(details);

        return fetch(this.state.apiURL + '/artists/', {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': this.token
            },
            body: formBody

        })
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log("error occurred: " + error.message);
            throw error;
        });
    }

    login (email, password) {

        let details = {

           'email': email,
           'password': password

        };
        let formBody = APIHelper.getFormBody(details);

        return fetch(this.state.apiURL + '/users/authenticate', {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody

        })
        .then((response) => {
           return response.json();
        })
        .catch(error => {
           console.log("error occurred: " + error.message);
           throw error;
        });
    }

    register (username, email, password) {

        let details = {

             'username': username,
             'email': email,
             'password': password

        };
        let formBody = APIHelper.getFormBody(details);

        return fetch(this.state.apiURL + '/users/register', {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody

        })
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log("error occurred: " + error.message);
            throw error;
        });
    }

    static getFormBody(details){

        return Object.keys(details)
                     .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

    }

}