import React from 'react';
import {View, StyleSheet, Alert, ListView} from "react-native";
import {List, ListItem, Button, Text} from 'react-native-elements';
import APIHelper from "../components/APIHelper";

export default class ArtistsListScreen extends React.Component {

    static navigationOptions = {
        title: 'Here are all artists'
    };

    constructor(props) {
        super(props);

        const {navigation} = this.props;
        const apiToken = navigation.getParam('token', '');
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            token: apiToken,
            datasource: ds.cloneWithRows([{nickname: 'example', age: '18'}])
        }
    }

    renderRow(rowData, sectionID) {
        return (
            <ListItem
                key={sectionID}
                title={rowData.nickname}
                subtitle={rowData.age + ' years old'}
            />
        );
    };

    render() {

        return (

            <View style={stylesVariable.container}>

                <Button
                    title = 'Show Artists'
                    raised
                    buttonStyle={stylesVariable.button_style}
                    backgroundColor={'blue'}
                    onPress={this.handleList.bind(this)}

                >
                    <Text>Show Artists</Text>
                </Button>

                <Button
                    title = 'Go to creation page'
                    raised
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

                    <ListView
                        renderRow={this.renderRow.bind(this)}
                        dataSource={this.state.datasource}
                    />

                </List>

            </View>

        );


    }

    handleList = () => {

        const api = new APIHelper(this.props, this.state.token);

        api.getAllArtists()
            .then(responseJSON => this.setState({datasource: responseJSON.data.artists}))
            .catch(error => {
                Alert.alert("Error", error.message);
                throw new Error(error);
            });

    };

}

const stylesVariable = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center'
    },

    button_style: {
        width: 200,
        margin: 15,
        marginTop: 40
    },

    list_style: {
        marginBottom: 20
    }

});