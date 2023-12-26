import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { colors, parameters } from '../global/styles'

const FoodCard = ({ onPressFoodCard, restaurantName, deliveryAvailable, discountAvailable
    , discountPercent, numberOfReview, businessAddress, farAway, averageReview, images, screenWidth }) => {
    return (
        <TouchableOpacity>
            <View style={{ ...styles.cardView, width: screenWidth }}>
                <Image
                    style={{ ...styles.image, width: screenWidth }}
                    source={{ uri: images }} />
                <View>
                    <View>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.distance}>
                            <Icon
                                name='place'
                                type='material'
                                color={colors.GRAY1}
                                size={18}
                                iconStyle={{ marginTop: 3, }} />
                            <Text style={styles.min}>{farAway}  Min</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 9, marginLeft: 10, marginTop: 2 }}>
                            <Text>{businessAddress}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.review}>
                <Text style={styles.average}>{averageReview}</Text>
                <Text style={styles.numberOfReview}>{numberOfReview}  reviews</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FoodCard

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: 9,
        borderWidth: 1,
        borderColor: colors.GRAY1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    image: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        // borderBottomLeftRadius:5,
        // borderBottomRightRadius:5,
        height: 180,
    },
    restaurantName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.GRAY,
        marginTop: 5,
        marginLeft: 10,
    },
    distance: {
        flex: 4,
        flexDirection: 'row',
        borderRightColor: colors.GRAY2,
        borderRightWidth: 1,
        paddingHorizontal: 5,
        marginHorizontal: 5,
    },
    min: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 5,
        color: colors.GRAY,
        marginHorizontal: 5,
    },
    address: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 5,
        color: colors.GRAY,
        paddingHorizontal: 10,
    },
    review: {
        position: 'absolute',
        top: 0,
        right: 10,
        backgroundColor: colors.TRANSPARENT,
        // backgroundColor: 'rgba(52,52,52,0.3)',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 12,
    },
    average: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -3,
    },
    numberOfReview: {
        color: colors.white,
        fontSize: 13,
        marginRight: 0,
        marginLeft: 0,
    }

})