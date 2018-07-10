import React from 'react';
import {View, StyleSheet} from "react-native";
import {FormInput, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import APIHelper from "../components/APIHelper";

export default class WelcomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Welcome page'
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

                    placeholder='Email'
                    leftIcon={
                        {
                            type: 'font-awesome',
                            name: 'envelope'
                        }
                    }
                    onChangeText={(value) => this.setState({email: value})}
                    value = {this.state.email}

                />

                <FormInput

                    placeholder='Password'
                    secureTextEntry={true}
                    leftIcon={
                        {
                            type: 'font-awesome',
                            name: 'lock'
                        }
                    }
                    onChangeText={(value) => this.setState({password: value})}
                    value = {this.state.password}

                />

                <Button

                    title = 'Sign in'
                    icon={
                        <Icon
                            name='arrow-right'
                            size={15}
                            color='white'
                        />
                    }

                    buttonStyle = {
                        {
                            backgroundColor: "blue"
                        }
                    }

                    onPress = {this.handleLogin.bind(this)}

                />

                <Button

                    title = 'Sign up'
                    icon={
                        <Icon
                            name='arrow-right'
                            size={15}
                            color='white'
                        />
                    }

                    buttonStyle = {
                        {
                            backgroundColor: "blue"
                        }
                    }

                    onPress = {
                        () => this.props.navigation.navigate('Registration')
                    }

                />

            </View>

        );

    }

    handleLogin = () => {

        const api = new APIHelper('');

        api.login(this.state.email, this.state.password)
           .then(responseJSON => this.props.navigation.navigate('ShowArtists', {token: responseJSON.data.token}));

    }


}


const stylesVariable = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center'
    },
    next_button: {

    }

});