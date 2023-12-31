import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import SignInWelcomeScreen from '../screens/authscreens/SignInWelcomeScreen'
import SignInScreen from '../screens/authscreens/SignInScreen'
import HomeScreen from '../screens/HomeScreen'
import BottomNavTabs from './BottomNavTabs'
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen'
const AuthStack = createStackNavigator()

const AuthNavigators = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignInWelcomeScreen"
                component={SignInWelcomeScreen}
                options={{
                    headerShown: false, ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <AuthStack.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    headerShown: false, ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <AuthStack.Screen
                name="BottomNavTabs"
                component={BottomNavTabs}
                options={{
                    headerShown: false, ...TransitionPresets.RevealFromBottomAndroid,
                }}
            />

            <AuthStack.Screen
                name="RestaurantsMapScreen"
                component={RestaurantsMapScreen}
                options={{
                    headerShown: false, ...TransitionPresets.RevealFromBottomAndroid,
                }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthNavigators

const styles = StyleSheet.create({

})