import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import {Entypo, MaterialCommunityIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return(
        <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, 
        tabBarActiveTintColor: "black", 
        tabBarActiveTintColor: "gray",}} >

            <Tab.Screen options={{tabBarIcon:({color})=> (<Entypo name="home" color="black" size={32}/>)}} name="Home" component={Home} />
            <Tab.Screen options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="account-circle" color="black" size={32}/>)}} name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}