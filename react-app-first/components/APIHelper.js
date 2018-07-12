import RestClient from 'react-native-rest-client';

export default class APIHelper extends RestClient{

    constructor (authToken){

        if(!(authToken === '')){

            super('http://10.0.3.2:8081', {

                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                    'x-access-token': authToken
                }

            });

        }else{

            super('http://10.0.3.2:8081', {

                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                }

            });

        }
    }

    getAllArtists () {
        return this.GET('/artists/')
                   .then(response => response.json())
                   .catch(error => console.log("Error happened: " + error.message));
    }

    createArtist (nickname, age) {
        return this.POST('/artists/', {nickname, age})
                   .then(response => response.json())
                   .catch(error => console.log("Error happened: " + error.message));
    }

    login (email, password) {
        return this.POST('/users/authenticate', {email, password})
                   .then(response => response.json())
                   .catch(error => console.log("Error happened: " + error.message));
    }

    register (username, email, password) {
        return this.POST('/users/register', {username, email, password})
                   .then(response => response.json())
                   .catch(error => console.log("Error happened: " + error.message));
    }

}
