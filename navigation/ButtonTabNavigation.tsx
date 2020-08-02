import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Fontisto } from '@expo/vector-icons';

import HomeScreen from '../screens/home/HomeScreen';

export type RootStackParam = {
    Root: undefined;
    NotFound: undefined;
};

export type BottonNavigator = {
    Home: undefined;
    Forward: undefined;
    Order: undefined;
    User: undefined;
};

export type TabHomeParamStack = {
    HomeScreen: undefined;
};

const BottonTab = createBottomTabNavigator<BottonNavigator>();

export default function ButtonTabNavigation() {
    return (<BottonTab.Navigator
        initialRouteName='Home'>
        <BottonTab.Screen
            name='Home'
            component={TabHomeNavigator}
        ></BottonTab.Screen>
    </BottonTab.Navigator>);
}

const TabBarIcon = (props: { name: string; color:string; }) =>  {
    return <Fontisto size={30} style={{ marginBottom: -3 }} {...props} />;    
};

const TabHomeStack = createStackNavigator<TabHomeParamStack>();

const TabHomeNavigator = () => {
    return (
    <TabHomeStack.Navigator>
        <TabHomeStack.Screen 
        name='HomeScreen'
        component={HomeScreen}
        options={{
            headerTitle: 'Home' }}>
        </TabHomeStack.Screen>
    </TabHomeStack.Navigator>
    );
};