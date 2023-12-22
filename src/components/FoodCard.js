import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { colors, parameters } from '../global/styles'

const FoodCard = ({ onPressFoodCard, restaurantName, deliveryAvailable, discountAvailable
    , discountPercent, numberOfReview, businessAddress, farAway, averageReview, images, screenWidth }) => {
    return (
        <TouchableOpacity>
            <View style={{ ...styles.cardView, width: screenWidth }}>
                <Image /> 
            </View>
        </TouchableOpacity>
    )
}

export default FoodCard

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: 9,
        borderWidth: 1,
        borderColor: colors.GRAY,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
})