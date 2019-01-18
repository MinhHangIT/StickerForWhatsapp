import { createStackNavigator } from 'react-navigation';
import Colors from '../constants/Colors';

import SplashScreen from '../screens/Splash/SplashContainer';
import MainScreen from '../screens/Main/MainContainer';
import ExitAppScreen from '../screens/ExitApp/ExitContainer';
import MoreAppsScreen from '../screens/MoreApps/MoreApps';
import AIBInterstitialScreen from '../screens/AIBInterstitial/AIBInterstitialContainer';
import MainView from '../screens/MainScreen/MainView';
import ShowSTickerView from '../screens/ShowSticker/ShowSTickerView';

const RootNavigator = createStackNavigator(
  {
    MainView: {
      screen: MainView
    },
    ShowSTickerView: {
      screen: ShowSTickerView
    },

    SplashScreen: {
      screen: SplashScreen
    },
    MainScreen: {
      screen: MainScreen
    },
    MoreAppsScreen: {
      screen: MoreAppsScreen
    },
    ExitAppScreen: {
      screen: ExitAppScreen
    },
    AIBInterstitialScreen: {
      screen: AIBInterstitialScreen
    }
  },
  {
    headerMode: 'none',
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
        color: 'white'
      },
      headerStyle: {
        backgroundColor: Colors.colorPrimary
      }
    })
  }
);

export default RootNavigator;
