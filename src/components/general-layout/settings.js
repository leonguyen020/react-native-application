import Menu from '../settings/menu';
import Profile from '../settings/profile'
import Notifications from '../settings/notifications'
import {
  createStackNavigator,
} from 'react-navigation';

const SettingsPage = createStackNavigator({
  Home: { screen: Menu },
  Profile: { screen: Profile },
  Notifications: { screen: Notifications },
},{
  headerMode:'none'
});

export default SettingsPage;