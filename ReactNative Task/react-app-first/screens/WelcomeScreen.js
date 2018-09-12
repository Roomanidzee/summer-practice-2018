import React from 'react';
import {View, StyleSheet, Alert} from "react-native";
import {FormInput, Button, Icon} from 'react-native-elements';
import APIHelper from "../components/APIHelper";

export default class WelcomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Главная страница',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: (<View />)
    };

    constructor(props) {

        super(props);

        this.state = {
            email: '',
            password: ''
        };

    }

    render() {

        return (

            <View style={stylesVariable.container}>
                <FormInput

                    placeholder='Электронная почта'
                    onChangeText={(value) => this.setState({email: value})}
                    value = {this.state.email}

                />

                <FormInput

                    placeholder='Пароль'
                    secureTextEntry={true}
                    onChangeText={(value) => this.setState({password: value})}
                    value = {this.state.password}

                />

                <Button

                    title = 'Войти'
                    icon={
                        <Icon
                            name='arrow-right'
                            size={18}
                        />
                    }
                    buttonStyle={stylesVariable.button_style}
                    backgroundColor={'blue'}
                    onPress = {this.handleLogin.bind(this)}

                />

                <Button

                    title = 'Зарегистрироваться'
                    icon={
                        <Icon
                            name='arrow-right'
                            size={18}
                        />
                    }
                    buttonStyle={stylesVariable.button_style}
                    backgroundColor={'blue'}
                    onPress = {
                        () => this.props.navigation.navigate('Registration')
                    }

                />

            </View>

        );

    }

    handleLogin = () => {

        const api = new APIHelper(this.props, '');

        api.login(this.state.email, this.state.password)
           .then(responseJSON => {

               if(!(responseJSON.data.token === '')){
                   this.props.navigation.push('ShowArtists', {token: responseJSON.data.token});
               }

           })
           .catch(error => Alert.alert("Error", error.message));

    }


}


const stylesVariable = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_style: {
        width: 200,
        margin: 15
    },
    icon_style: {
        padding: 10
    }

});