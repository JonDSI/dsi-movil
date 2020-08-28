import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Fontisto } from '@expo/vector-icons';

import { PrincipalTabNavigation, HomeTabParam, ForwardTabParam, OrderTabParam, UserTabParam } from './ScreenTypes';

import { HomeScreen } from '../screens/home/HomeScreen';
import { ForwardScreen } from '../screens/forward/ForwardScreen';
import { OrderScreen } from '../screens/order/OrderScreen'
import { UserScreen } from '../screens/user/UserScreen'

const PrincipalTab = createBottomTabNavigator<PrincipalTabNavigation>();

export default function DSITabsNavigation() {
    return (
    <PrincipalTab.Navigator
        initialRouteName='Home'>
        <PrincipalTab.Screen name='Inicio'   component={HomeTabNavigator} options={{ tabBarIcon: ({ color }) => <TabBarIcon name='home' color= '#fff'/> }}/>
        <PrincipalTab.Screen name='Mandados' component={ForwardTabNavigation} options={{ tabBarIcon: ({ color }) => <TabBarIcon name='motorcycle' color= '#fff'/> }}/>
        <PrincipalTab.Screen name='Pedidos'   component={OrderTabNavigation} options={{ tabBarIcon: ({ color }) => <TabBarIcon name='shopping-store' color= '#fff'/> }}/>
        <PrincipalTab.Screen name='Cuenta' component={UserTabNavigation} options={{ tabBarIcon: ({ color }) => <TabBarIcon name='user-secret' color= '#fff'/> }}/>
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
                component={HomeScreen}
                options={{ title: 'Inicio' }}/>
       </HomeTabStack.Navigator>
    );

};

const ForwardTabStack = createStackNavigator<ForwardTabParam>();

const ForwardTabNavigation = () => {
    return (
        <ForwardTabStack.Navigator>
            <ForwardTabStack.Screen
                name='ForwardScreen'
                component={ForwardScreen}
                options={{ title: 'Mandados' }}/>
        </ForwardTabStack.Navigator>
    );
};

const OrderTabStack = createStackNavigator<OrderTabParam>();

const OrderTabNavigation = () => {
    return (
        <OrderTabStack.Navigator>
            <OrderTabStack.Screen
                name='OrderScreen'
                component={OrderScreen}
                options={{ title: 'Ordenes' }}/>
        </OrderTabStack.Navigator>
    );
};

const UserTabStack = createStackNavigator<UserTabParam>();

const UserTabNavigation = () => {
    return (
        <UserTabStack.Navigator>
            <UserTabStack.Screen
                name='UserScreen'
                component={UserScreen}
                options={{ title: 'Usuario' }}/>
        </UserTabStack.Navigator>
    );
};