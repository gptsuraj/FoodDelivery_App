import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/global/styles';
import SignInScreen from './src/authscreens/SignInScreen';

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        style="auto"
        backgroundColor={colors.statusBar} />
      <SignInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
