import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigators from './authNavigators'

const RootNavigators = () => {
    return (
        <NavigationContainer>
            <AuthNavigators />
        </NavigationContainer>
    )
}

export default RootNavigators

const styles = StyleSheet.create({})