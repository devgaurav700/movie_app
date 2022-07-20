import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RootStack from './src/navigation';

const App = () => {
  return <RootStack />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
