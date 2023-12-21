
import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React, { useState, useRef } from 'react'
import Header from '../../components/Header';
import { colors, parameters, title } from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import { Icon, Button, SocialIcon } from '@rneui/base';

import Swiper from 'react-native-swiper';

const SignInWelcomeScreen = ({ navigation }) => {
    return (

        <View style={{ flex: 1 }}>

            <View style={{ flex: 3, alignItems: 'center', paddingTop: 60, }}>
                <Text style={{ fontSize: 26, color: colors.ORANGE1, fontWeight: 'bold' }}>DISCOVERY RESTAURANTS</Text>
                <Text style={{ fontSize: 26, color: colors.ORANGE1, fontWeight: 'bold' }}>IN YOUR AREA</Text>
            </View>

            <View style={{ flex: 8, justifyContent: 'center' }}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image
                            source={{ uri: "https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg?w=360&t=st=1703145546~exp=1703146146~hmac=f950d00b2813f28239bcdbaedabc63a0c8b83815f4796c6f32cc5e8e004c55ea" }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                    <View style={styles.slide1}>
                        <Image
                            source={{ uri: "https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=740&t=st=1703146263~exp=1703146863~hmac=bdc163ebc4325c9046fce31113a52b36219c2fe227a648c25f7027bf16d4109e" }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                    <View style={styles.slide1}>
                        <Image
                            source={{ uri: "https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?w=360&t=st=1703146386~exp=1703146986~hmac=8447f66b2f3f3a8e9cafe16f0e88ccfc16b0591c30ce467dcb6110375d376cb6" }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                    <View style={styles.slide1}>
                        <Image
                            source={{ uri: "https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?w=740&t=st=1703154054~exp=1703154654~hmac=5853ac896a4f9db35f0b6b7547ac364d95ffff171b2ed932e72e750a871756dd" }}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                </Swiper>
            </View>
            <View style={{ flex: 4, justifyContent: 'flex-end', marginBottom: 20 }}>
                <View style={{ margin: 20, }}>
                    <Button
                        title={"SIGN IN"}
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={() => { navigation.navigate("SignInScreen")}}

                    />
                </View>
                <View style={{
                    margin: 20,
                }}>
                    <Button
                        title='Create your account'
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                    />
                </View>
            </View>
        </View>


    )
}

export default SignInWelcomeScreen

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.GRAY,
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.ORANGE1
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.ORANGE1
    },
    createButton: {
        backgroundColor: colors.white,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.GRAY,
        height: 50,
        paddingHorizontal: 20,
    },
    createButtonTitle: {
        color: colors.GRAY,
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -3,
    },
})