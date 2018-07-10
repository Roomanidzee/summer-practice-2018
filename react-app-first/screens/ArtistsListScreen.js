import React from 'react';
import {View, StyleSheet} from "react-native";
import {ListItem, Button} from 'react-native-elements';
import {ArtistStack} from "../navigation/AppNavigator";
import APIHelper from "../components/APIHelper";

export default class ArtistsListScreen extends React.Component{

    static navigationOptions = {
        title: 'Here are all artists'
    };

     constructor(props){
         super(props);

         this.state = {
             artists: []
         }
     }

     componentDidMount(){

         const {stateProps} = props.navigation;
         const token = stateProps.params.token;
         const api = new APIHelper(token);

         return api.getAllArtists()
                   .then(responseJSON => {
                       this.setState({artists: responseJSON.data.artists});
                   })
                   .catch((error) => {
                       console.error(error);
                   });


     }

     render(){

         return (

             <View style={stylesVariable.container}>

                 <Button

                    title= 'Go to Artist creation page'
                    onPress = {() => this.props.navigation.navigate('AddArtist', {

                        token: props.navigation.params.token

                    })}

                 />

                 {
                     this.state.artists.map((item, i) => (

                         <ListItem

                             key={i}
                             title={item.nickname}
                             subtitle={item.age + ' years old'}

                         />

                     ))
                 }

                 <ArtistStack/>

             </View>

         );

     }

}

const stylesVariable = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center'
    }

});