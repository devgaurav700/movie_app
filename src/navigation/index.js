import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieList from '../screens/MovieList';
import MovieDetails from '../screens/MovieDetails';
import WatchList from '../screens/WatchList';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MovieList" component={MovieList} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
        <Stack.Screen name="WatchList" component={WatchList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
