import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { colors, parameters } from "../global/styles"
import { Icon } from '@rneui/base'

const Header = ({ title, type }) => {
    return (
        <View style={styles.header}>
            <View style={{ marginLeft: 20 }}>
                <Icon
                    type='material-community'
                    name={type}
                    color={colors.white}
                    size={28}
                    onPress={() => { }} />
            </View>
            <View >
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.ORANGE,
        flexDirection: 'row',
        height: parameters.headerHeight,
        paddingTop: 45,


    },
    headerText: {
        color: colors.white,
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 30,

    }
})