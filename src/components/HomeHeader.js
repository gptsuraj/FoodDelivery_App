import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon, withBadge } from '@rneui/themed'
import { parameters, colors } from '../global/styles'

const HomeHeader = () => {

    const BadgeIcon = withBadge(0)(Icon)
    return (
        <View style={styles.headers}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 15, marginBottom: -40 }}>
                <Icon
                    type='material-community'
                    name='menu'
                    color={colors.white}
                    size={32} />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 15, marginBottom: -40 }}>
                <Text style={{ color: colors.white, fontSize: 25, fontWeight: 'bold' }}> XpressFood</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 15, marginBottom: -40 }}>
                <BadgeIcon
                    type='material-community'
                    name='cart'
                    size={32}
                    color={colors.white}
                />
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    headers: {
        flexDirection: 'row',
        backgroundColor: colors.ORANGE1,
        height: parameters.headerHeight,
        justifyContent: "space-between"
    },
})