import React from 'react';
import {View, StyleSheet, Alert} from "react-native";
import {FormInput, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import APIHelper from "../components/APIHelper";

export default class ArtistCreateScreen extends React.Component{

    static navigationOptions = {
        title: 'Add an artist, if you want'
    };

    constructor(props){

        super(props);

        this.state = {
            nickname: '',
            age: ''
        }

    }

    render(){

        return(

            <View style={stylesVariable.container}>

                <Button

                    title= 'Go to page with all artists'
                    onPress = {() => this.props.navigation.navigate('ShowArtists', {

                        token: this.props.navigation.params.token

                    })}
                    raised
                    buttonStyle={stylesVariable.button_style}
                    backgroundColor={'blue'}

                />

                <FormInput

                    placeholder='Nickname'
                    leftIcon={
                        {
                            type: 'font-awesome',
                            name: 'user'
                        }
                    }
                    onChangeText = {(value) => this.setState({nickname: value})}
                    value = {this.state.nickname}

                />

                <FormInput

                    placeholder='Age'
                    leftIcon={
                        {
                            type: 'font-awesome',
                            name: 'user'
                        }
                    }
                    onChangeText = {(value) => this.setState({age: value})}
                    value = {this.state.age}

                />

                <Button

                    title='Add artist'
                    icon={
                        <Icon
                            name='arrow-right'
                            size={15}
                            color='white'
                        />
                    }
                    raised
                    buttonStyle={stylesVariable.next_button}
                    backgroundColor={'blue'}
                    onPress = {this.handleArtistCreate.bind(this)}

                />

            </View>

        );

    }

    handleArtistCreate = () => {

        const {stateProps} = props.navigation;
        const token = stateProps.params.token;
        const api = new APIHelper(this.props, token);

        api.createArtist(this.state.nickname, this.state.age)
           .then(responseJSON => {

                if(responseJSON.status === "success"){
                    this.props.navigation.navigate('ShowArtists');
                }else{
                    this.props.navigation.navigate('AddArtist');
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