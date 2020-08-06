import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Fontisto } from '@expo/vector-icons';

import { PrincipalTabNavigation, HomeTabParam, ForwardTabParam } from '../navigation/ScreenTypes';

import HomeScreen from '../screens/home/HomeScreen';
import ForwardScreen from '../screens/forward/ForwardScreen';

const PrincipalTab = createBottomTabNavigator<PrincipalTabNavigation>();

export default function DSITabsNavigation() {
    return (
    <PrincipalTab.Navigator
        initialRouteName='Home'>
        <PrincipalTab.Screen name='Inicio'   component={HomeTabNavigator} options={{}} />
        <PrincipalTab.Screen name='Mandados' component={ForwardTabNavigation} options={{}} />
        <PrincipalTab.Screen name='Pedidos'  component={ForwardTabNavigation} options={{}} />
        <PrincipalTab.Screen name='Cuenta'   component={ForwardTabNavigation} options={{}} />
    </PrincipalTab.Navigator>);
}

const TabBarIcon = (props: { name: string; color:string; }) =>  {
    return <Fontisto size={30} style={{ marginBottom: -3 }} {...props} />;    
};

const HomeTabStack = createStackNavigator<HomeTabParam>();

const HomeTabNavigator = () => {
    return (
       <HomeTabStack.Navigator>
           <HomeTabStack.Screen
                name='HomeScreen'
                component={HomeScreen}/>
       </HomeTabStack.Navigator>
    );

};

const ForwardTabStack = createStackNavigator<ForwardTabParam>();

const ForwardTabNavigation = () => {
    return (
        <ForwardTabStack.Navigator>
            <ForwardTabStack.Screen
                name='ForwardScreen'
                component={ForwardScreen}/>
        </ForwardTabStack.Navigator>
    );
};
