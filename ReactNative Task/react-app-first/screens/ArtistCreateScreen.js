import React from 'react';
import {View, StyleSheet, Alert} from "react-native";
import {FormInput, Button} from 'react-native-elements';
import APIHelper from "../components/APIHelper";

export default class ArtistCreateScreen extends React.Component{

    static navigationOptions = {
        title: 'Добавление артиста',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: (<View />)
    };

    constructor(props){

        super(props);

        const {navigation} = this.props;
        const apiToken = navigation.getParam('token', '');

        this.state = {
            nickname: '',
            token: apiToken,
            age: ''
        }

    }

    render(){

        return(

            <View style={stylesVariable.container}>

                <Button

                    title= 'Вернуться к артистам'
                    onPress = {() => this.props.navigation.push('ShowArtists', {token: this.state.token})}
                    buttonStyle={stylesVariable.button_style}
                    backgroundColor={'blue'}

                />

                <FormInput

                    placeholder='Псевдоним'
                    onChangeText = {(value) => this.setState({nickname: value})}
                    value = {this.state.nickname}

                />

                <FormInput

                    placeholder='Возраст'
                    onChangeText = {(value) => this.setState({age: value})}
                    value = {this.state.age}

                />

                <Button

                    title='Добавить'
                    buttonStyle={stylesVariable.button_style}
                    backgroundColor={'blue'}
                    onPress = {this.handleArtistCreate.bind(this)}

                />

            </View>

        );

    }

    handleArtistCreate = () => {

        const api = new APIHelper(this.props, this.state.token);

        api.createArtist(this.state.nickname, this.state.age)
           .then(responseJSON => {

                if(responseJSON.status === "success"){
                    this.props.navigation.push('ShowArtists', {token: this.state.token});
                }else{
                    this.props.navigation.push('AddArtist', {token: this.state.token});
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