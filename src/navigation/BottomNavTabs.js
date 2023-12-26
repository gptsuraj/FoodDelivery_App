import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/HomeScreen';
const ClientTabs = createBottomTabNavigator();
import { colors } from '../global/styles';
import SearchScreen from '../screens/SearchScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import MyOrderScreen from '../screens/MyOrderScreen';
import { Icon } from '@rneui/base';


const BottomNavTabs = () => {
    return (
        <ClientTabs.Navigator
            tabBarOptions={{
                activeTintColor: colors.ORANGE,
            }}>
            <ClientTabs.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) =>
                    (<Icon
                        name='home'
                        type='material'
                        color={color}
                        size={size} />)

                }} />
            <ClientTabs.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) =>
                    (<Icon
                        name='search'
                        type='material'
                        color={color}
                        size={size} />)

                }} />

            <ClientTabs.Screen
                name="MyOrderScreen"
                component={MyOrderScreen}
                options={{
                    tabBarLabel: 'My Orders',
                    tabBarIcon: ({ color, size }) =>
                    (<Icon
                        name='view-list'
                        type='material'
                        color={color}
                        size={size} />)

                }} />
            <ClientTabs.Screen
                name="MyAccountScreen"
                component={MyAccountScreen}
                options={{
                    tabBarLabel: 'My Account',
                    tabBarIcon: ({ color, size }) =>
                    (<Icon
                        name='person'
                        type='material'
                        color={color}
                        size={size} />)

                }} />
        </ClientTabs.Navigator>
    )
}

export default BottomNavTabs

const styles = StyleSheet.create({})