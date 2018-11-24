import { createStackNavigator, createAppContainer,createDrawerNavigator,createMaterialTopTabNavigator } from 'react-navigation';
import Home from '../screen/Home/Home';
import Dashboard from '../screen/Dashboard/Dashboard';
import Login from '../screen/Login/Login';

const StackNavigation = createStackNavigator({
    Home: {
        screen: Home
    },
    Dashboard: {
        screen: Dashboard
    },
    Login: {
        screen: Login
    }
});

const DrawerStack1 = createDrawerNavigator({
    Home: {
        screen: Home
    },
    Dashboard: {
        screen: Dashboard
    },
    Login: {
        screen: Login
    }
});

const DrawerStack = createMaterialTopTabNavigator({
    Home: {
        screen: DrawerStack1
    },
    Dashboard: {
        screen: Dashboard
    },
    Login: {
        screen: Login
    }
});


const Navigation = createAppContainer(DrawerStack);

export default Navigation;