import React from 'react';
import {View, StyleSheet, Alert} from "react-native";
import {FormInput, Button} from 'react-native-elements';
import APIHelper from "../components/APIHelper";

export default class RegisterScreen extends React.Component {

    static navigationOptions = {
        title: 'Регистрация',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: (<View />)
    };

    constructor(props) {

        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        }

    }

    render() {

        return (


            <View style={stylesVariable.container}>

                <FormInput

                    placeholder='Имя пользователя'
                    onChangeText = {(value) => this.setState({username: value})}
                    value = {this.state.username}

                />

                <FormInput

                    placeholder='Электронная почта'
                    onChangeText = {(value) => this.setState({email: value})}
                    value = {this.state.email}

                />

                <FormInput

                    placeholder='Пароль'
                    secureTextEntry={true}
                    onChangeText = {(value) => this.setState({password: value})}
                    value = {this.state.password}

                />

                <Button

                    title='Отправить'
                    buttonStyle={stylesVariable.button_style}
                    backgroundColor={'blue'}
                    onPress = {this.handleRegister.bind(this)}

                />

            </View>

        );

    }

    handleRegister = () => {

        const api = new APIHelper(this.props, '');
        api.register(this.state.username, this.state.email, this.state.password)
           .then(responseJSON => {

                 if(responseJSON.status === "success"){
                     this.props.navigation.navigate('WelcomePage');
                 }else{
                     this.props.navigation.navigate('Registration');
                 }

           })
           .catch(error => Alert.alert("Error", error.message));

    }

}

const stylesVariable = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_style: {
        width: 200,
        margin: 15
    }

});