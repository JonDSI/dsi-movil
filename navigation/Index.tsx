import * as React from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParam } from '../navigation/ScreenTypes';

import LinkingConf from "./LinkingConf";
import DSITabsNavigation from "./ButtonTabNavigation";

const Stack = createStackNavigator<RootStackParam>();

const RootNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name='Root' component= {DSITabsNavigation}></Stack.Screen>
        </Stack.Navigator>
    );
};

export default function Navigation() {
    return(
        <NavigationContainer linking= {LinkingConf}>
            <RootNavigator/>
        </NavigationContainer>
    );
};