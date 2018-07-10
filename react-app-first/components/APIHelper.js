import RestClient from 'react-native-rest-client';

export default class APIHelper extends RestClient{

    constructor (authToken){

        if(!(authToken === '')){

            super('http://localhost:8081', {

                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                    'x-access-token': authToken
                }

            });

        }else{

            super('http://localhost:8081', {

                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                }

            });

        }
    }

    getAllArtists () {
        return this.GET('/artists/')
                   .then(response => response.json());
    }

    createArtist (nickname, age) {
        return this.POST('/artists/', {nickname, age})
                   .then(response => response.json());
    }

    login (email, password) {
        return this.POST('/users/authenticate', {email, password})
                   .then(response => response.json());
    }

    register (username, email, password) {
        return this.POST('/users/register', {username, email, password})
                   .then(response => response.json());
    }

}