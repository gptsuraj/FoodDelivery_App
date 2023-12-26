import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import Header from '../../components/Header';
import { colors, parameters, title } from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import { Icon, Button, SocialIcon } from '@rneui/base';


const SignInScreen = ({ navigation }) => {

    const [textInput2focused, setTextInput2Focused] = useState(false)
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)
    return (
        <View style={styles.container}>
            <Header
                title="My Account "
                type="arrow-left"
                navigation={navigation} />

            <View style={{ marginLeft: 20, marginTop: 10, }}>
                <Text style={title}>Sign-In</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 10, }}>
                <Text style={styles.text1} >Please enter the email and password</Text>
                <Text style={styles.text1} >registered with your account.</Text>
            </View>
            <View style={{ marginTop: 20, }}>
                <View>
                    <TextInput
                        style={styles.TextInput1}
                        placeholder='Email'
                        ref={textInput1} />
                </View>
                <View style={styles.TextInput2}>
                    <Animatable.View>
                        <Icon
                            name='lock'
                            iconStyle={{ color: colors.GRAY }}
                            type='material' />
                    </Animatable.View>
                    <TextInput
                        style={{ width: "80%" }}
                        placeholder='Password'
                        ref={textInput2}
                        onFocus={() => {
                            setTextInput2Focused(false)
                        }}
                        onBlur={() => { setTextInput2Focused(true) }} />
                    <Animatable.View animation={textInput2focused ? "" : "fadeInLeft"} duration={400}>
                        <Icon
                            name='visibility'
                            iconStyle={{ color: colors.GRAY }}
                            type='material'
                            style={{ marginLeft: 10, }} />
                    </Animatable.View>
                </View>
            </View>
            <View style={{ margin: 20, }}>
                <Button
                    title={"SIGN IN"}
                    buttonStyle={parameters.styledButton}
                    titleStyle={parameters.buttonTitle}
                    onPress={() => { navigation.navigate('BottomNavTabs')}}

                />
            </View>

            <View style={{ alignItems: 'center', marginTop: 10, }}>
                <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>Forget Password ?</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 20, }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, }}>OR</Text>
            </View>

            <View style={{ margin: 10, marginEnd: 30, }}>
                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                    style={styles.SocialIcon}
                    onPress={() => { }} />
            </View>

            <View style={{ margin: 10, marginEnd: 30, }}>
                <SocialIcon
                    title='Sign In With Google'
                    button
                    type='google'
                    style={styles.SocialIcon}
                    onPress={() => { }} />
            </View>

            <View style={{ alignItems: 'center', marginTop: 10, }}>
                <Text style={{ ...styles.text1, textDecorationLine: "underline" }}>New on XpressFood ?</Text>
            </View>

            <View style={{
                alignItems: 'flex-end',
                margin: 20
            }}>
                <Button
                    title='Create an account'
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createButtonTitle}
                />
            </View>

        </View>
    )
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1: {
        color: colors.GRAY,
        fontSize: 16,

    },
    TextInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        height: 40,
        paddingHorizontal: 10,
    },
    TextInput2: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        alignItems: "center",
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 40,
        paddingHorizontal: 10,

    },
    SocialIcon: {
        borderRadius: 12,
        height: 50,
        width: "100%",

    },
    createButton: {
        backgroundColor: colors.white,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ff8c52',
        height: 40,
        paddingHorizontal: 20,
    },
    createButtonTitle: {
        color: '#ff8c52',
        fontSize: 16,
        fontWeight: " ",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -3,
    },
})