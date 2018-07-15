import React from 'react';
import {View, StyleSheet, Alert} from "react-native";
import {List, ListItem, Button, Text} from 'react-native-elements';
import APIHelper from "../components/APIHelper";

export default class ArtistsListScreen extends React.Component {

    static navigationOptions = {
        title: 'Список артистов',
        headerTitleStyle: { alignSelf: 'center' },
        headerRight: (<View />)
    };

    constructor(props) {
        super(props);

        const {navigation} = this.props;
        const apiToken = navigation.getParam('token', '');

        this.state = {
            token: apiToken,
            artistsList: [{nickname: "example", age: 18}]
        };
    }

    render() {

        return (

            <View style={stylesVariable.container}>

                <Button
                    title = 'Показать артистов'
                    buttonStyle={stylesVariable.button_style}
                    backgroundColor={'blue'}
                    onPress={this.handleList.bind(this)}

                >
                    <Text>Show Artists</Text>
                </Button>

                <Button
                    title = 'Добавить'
                    buttonStyle={stylesVariable.button_style}
                    backgroundColor={'blue'}
                    onPress={
                        () => this.props.navigation.push('AddArtist', {

                            token: this.state.token

                        }
                     )
                    }

                >
                    <Text>Go to creation page</Text>
                </Button>


                <List containerStyle={stylesVariable.list_style}>

                    {

                        this.state.artistsList.map((item, i) => (

                            <ListItem
                                roundAvatar
                                key = {i}
                                title = {item.nickname}
                                subtitle = {`${item.age} лет`}
                                avatar = {{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                            />

                        ))

                    }

                </List>

            </View>

        );


    }

    handleList = () => {

        const api = new APIHelper(this.props, this.state.token);

        api.getAllArtists()
            .then(responseJSON => {

                const data = responseJSON.data.artists.map(item => ({
                    nickname: item.nickname,
                    age: item.age
                }));

                this.setState({artistsList: data})
            })
            .catch(error => {
                Alert.alert("Error", error.message);
                throw new Error(error);
            });

    };

}

const stylesVariable = StyleSheet.create({

    container: {
        width: '100%',
        alignItems: 'center'
    },

    button_style: {
        width: 200,
        margin: 15
    },

    list_style: {
        marginBottom: 20,
        width: '100%'
    }

});