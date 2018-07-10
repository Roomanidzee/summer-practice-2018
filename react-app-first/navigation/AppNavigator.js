import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ArtistsListScreen from "../screens/ArtistsListScreen";
import ArtistCreateScreen from "../screens/ArtistCreateScreen";

exports.RootStack = createStackNavigator(
    {
        WelcomePage: WelcomeScreen,
        Registration: RegisterScreen
    },
    {
        initialRouteName: 'WelcomePage'
    }
);

const ArtistShowStack = createStackNavigator({
    ShowArtists: ArtistsListScreen
});

const ArtistCreateStack = createStackNavigator({
    AddArtist: ArtistCreateScreen
});

exports.ArtistStack =  createBottomTabNavigator({
    ArtistShowStack,
    ArtistCreateStack
});