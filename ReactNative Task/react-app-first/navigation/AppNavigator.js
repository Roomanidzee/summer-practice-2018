import {createStackNavigator} from 'react-navigation';
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ArtistsListScreen from "../screens/ArtistsListScreen";
import ArtistCreateScreen from "../screens/ArtistCreateScreen";

exports.RootStack = createStackNavigator(
    {
        WelcomePage: {screen: WelcomeScreen},
        Registration: {screen: RegisterScreen},
        ShowArtists: {screen: ArtistsListScreen},
        AddArtist: {screen: ArtistCreateScreen}
    },
    {
        initialRouteName: 'WelcomePage'
    }
);