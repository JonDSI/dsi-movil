import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { StatusBar } from 'expo-status-bar';

import Navigation from './src/navigation/Index';
import RootState  from './src/redux/app.reducer';

const store = createStore(RootState);

export default function App() {
  return (
   <SafeAreaProvider>
     <Provider store = {store}>
        <Navigation />
        <StatusBar/>
     </Provider>
   </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
