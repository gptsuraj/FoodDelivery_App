import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '../components/HomeHeader'
import { colors } from '../global/styles';
import { Icon } from '@rneui/base';

const HomeScreen = () => {
    const [delivery, setDelivery] = useState(true);
    return (
        <View style={styles.container}>
            <HomeHeader />
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}>
                <View>
                    <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity
                            onPress={() => { setDelivery(true) }}>
                            <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.ORANGE1 : colors.white, padding: 10 }}>
                                <Text style={styles.deliveryText}>Delivery</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { setDelivery(false) }}>
                            <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.white : colors.ORANGE1, }}>
                                <Text style={styles.deliveryText}>Pick-Up</Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.filterView}>
                    <View style={styles.addressView}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                            <Icon
                                type='material-community'
                                name='map-marker'
                                color={colors.GRAY}
                                size={26} />
                            <Text style={{ marginLeft: 5, width: 100, height: 20 }}>Hello World!!</Text>
                        </View>
                        <View style={styles.clockView}>
                            <Icon
                                type='material-community'
                                name='clock-time-four'
                                color={colors.GRAY}
                                size={26} />
                            <Text style={{ marginLeft: 5, marginRight: 10 }}>Now</Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 15, marginLeft: 20, }}>
                        <Icon
                            type='material-community'
                            name='tune'
                            color={colors.GRAY}
                            size={28} />

                    </View>
                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Categories</Text>
                </View>
            </ScrollView>
        </View >
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    deliveryButton: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15
    },
    deliveryText: {
        marginLeft: 5,
        fontSize: 16
    },
    filterView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginRight: 10,
    },
    clockView: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        alignItems: 'center',
        borderRadius: 15,
        marginLeft: 20,
        marginRight: 20,
        paddingHorizontal: 5,
        borderRadius: 15,

    },
    addressView: {
        flexDirection: 'row',
        backgroundColor: colors.GRAY2,
        borderRadius: 15,
        marginLeft: 30,
        paddingVertical: 3,
        paddingHorizontal: 30,
    },
    headerText: {
        color: colors.GRAY,
        fontSize: 24,
        fontWeight: 'bold',
        paddingLeft: 10,

    }, headerTextView: {
        backgroundColor: colors.GRAY2,
        marginVertical:10,
        paddingVertical:2,
    }
}
)