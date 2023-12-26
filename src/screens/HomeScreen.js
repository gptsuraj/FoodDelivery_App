import { StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList, Pressable, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import HomeHeader from '../components/HomeHeader'
import { colors } from '../global/styles';
import { Icon } from '@rneui/base';
import { filterData, restaurantsData } from '../global/Data';
import FoodCard from '../components/FoodCard';
import CountDown from 'react-native-countdown-component';
const SCREEN_WIDTH = Dimensions.get('window').width;


const HomeScreen = ({ navigation }) => {


    const [delivery, setDelivery] = useState(true);
    const [indexCheck, setIndexCheck] = useState('0');
    return (
        <View style={styles.container}>
            <HomeHeader />

            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}>
                <View style={{ backgroundColor: colors.white, marginBottom: 5, marginTop: 5, }}>
                    <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity
                            onPress={() => { setDelivery(true) }}>
                            <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.ORANGE1 : colors.GRAY2, padding: 10 }}>
                                <Text style={styles.deliveryText}>Delivery</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { 
                                setDelivery(false)
                                navigation.navigate('RestaurantsMapScreen') }}
                                >
                            <View style={{ ...styles.deliveryButton, backgroundColor: delivery ? colors.GRAY2 : colors.ORANGE1, padding: 10 }}>
                                <Text style={styles.deliveryText}>Pick-Up</Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}> */}
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
                {/* </View> */}
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Categories</Text>
                </View>
                <View>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={filterData}
                        keyExtractor={(item) => item.id}
                        extraData={indexCheck}
                        renderItem={({ item, index }) => (
                            <Pressable
                                onPress={() => { setIndexCheck(item.id) }}>
                                <View style={indexCheck === item.id ? { ...styles.smallCardSelected } : { ...styles.smallCard }}>
                                    <Image
                                        style={{ height: 60, width: 60, borderRadius: 30, }}
                                        source={item.image} />
                                    <View>
                                        <Text style={indexCheck === item.id ? { ...styles.smallCardTextSelected } : { ...styles.smallCardText }}>
                                            {item.name}
                                        </Text>
                                    </View>
                                </View>

                            </Pressable>
                        )} />
                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Free delivery now</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 15, fontSize: 16, marginTop: -10, marginRight: 5, }}>Options changing in </Text>
                    <CountDown
                        until={3600}
                        size={14}
                        digitStyle={{ backgroundColor: colors.LIGHT_GREEN }}
                        digitTxtStyle={{ color: colors.RED }}
                        timeToShow={['M', 'S']}
                        timeLabels={{ m: 'Min', s: 'Sec' }}
                    />
                </View>
                <View>
                    <FlatList
                        data={restaurantsData}
                        style={{ marginVertical: 10 }}
                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={{ marginRight: 5 }}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH * 0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberOfReview} />
                            </View>
                        )} />
                </View>

                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Promotions</Text>
                </View>
                <View>
                    <FlatList
                        data={restaurantsData}
                        style={{ marginVertical: 10 }}
                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={{ marginRight: 5 }}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH * 0.8}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberOfReview} />
                            </View>
                        )} />
                </View>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}>Restaurants in your area</Text>
                </View>
                <View style={{ width: SCREEN_WIDTH, paddingTop: 10, }}>
                    {
                        restaurantsData.map(item => (
                            <View key={item.id} style={{ paddingBottom: 20, }}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH * 0.95}
                                    images={item.images}
                                    restaurantName={item.restaurantName}
                                    farAway={item.farAway}
                                    businessAddress={item.businessAddress}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberOfReview} />
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
            {delivery &&
                <View style={styles.floatingButton}>
                    <TouchableOpacity onPress={() =>
                        navigation.navigate('RestaurantsMapScreen')
                    }>
                        <Icon
                            name='place'
                            type='material'
                            size={30}
                            color={colors.ORANGE} />
                        <Text style={{ color: colors.GRAY }}>Map</Text>
                    </TouchableOpacity>
                </View>
            }
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

    },
    headerTextView: {
        backgroundColor: colors.GRAY2,
        marginVertical: 10,
        paddingVertical: 2,
    },
    smallCard: {
        borderRadius: 30,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin: 10,
        height: 100,

    },
    smallCardSelected: {
        borderRadius: 30,
        backgroundColor: colors.ORANGE,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 80,
        margin: 10,
        height: 100,

    },
    smallCardTextSelected: {
        fontWeight: 'bold',
        color: colors.white,
    },
    smallCardText: {
        fontWeight: 'bold',
        color: colors.BLACK,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 10,
        right: 15,
        backgroundColor: colors.white,
        elevation: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
    }
}
)