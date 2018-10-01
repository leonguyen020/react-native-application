import Menu from '../settings/menu';
import Profile from '../settings/profile';
import Notifications from '../settings/notifications';
import BookingPage from '../booking/booking';

import {
  createStackNavigator,
} from 'react-navigation';

const SettingsPage = createStackNavigator({
  SettingMenu: {
    screen: Menu
  },
  Profile: {
    screen: Profile
  },
  Notifications: {
    screen: Notifications
  },
  BookingPage: {
    screen: BookingPage
  }
},
  {
    // headerMode: 'none',
    cardStyle: {backgroundColor:'#fff'}
  },
  
);

export default SettingsPage;