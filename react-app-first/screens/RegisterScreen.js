import React from 'react';
import {View, StyleSheet, Alert} from "react-native";
import {FormInput, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import APIHelper from "../components/APIHelper";

export default class RegisterScreen extends React.Component {

    static navigationOptions = {
        title: 'Registration page'
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

                    placeholder='Username'
                    leftIcon={
                        {
                            type: 'font-awesome',
                            name: 'user'
                        }
                    }
                    onChangeText = {(value) => this.setState({username: value})}
                    value = {this.state.username}

                />

                <FormInput

                    placeholder='Email'
                    leftIcon={
                        {
                            type: 'font-awesome',
                            name: 'envelope'
                        }
                    }
                    onChangeText = {(value) => this.setState({email: value})}
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
                    onChangeText = {(value) => this.setState({password: value})}
                    value = {this.state.password}

                />

                <Button

                    title='Sign up'
                    icon={
                        <Icon
                            name='arrow-right'
                            size={15}
                            color='white'
                        />
                    }
                    raised
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
        margin: 15,
        marginTop:40
    }

});