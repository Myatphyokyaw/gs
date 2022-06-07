import React, {useContext, useEffect} from "react";
import {View, StyleSheet, Text, Image, Pressable, ScrollView} from "react-native";
import {COLORS, FONTS, SIZES} from "../Themes/theme";
import {useNavigation} from "@react-navigation/native";


const PopularGameComponent = props => {
    const navigation = useNavigation()
    const goDetail = (item) => {
        navigation.navigate("GamesDetailScreen", item)
    }
    return (
        (props.item.length === 0) ? null : (
            <View style={styles.container}>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>Popular Games</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {props.item.reverse().map((el, index) => {
                        return (
                            <Pressable onPress={() => goDetail(el)} key={index.toString()}
                                       android_ripple={{color: COLORS.lightGray3}} style={styles.bodyContainer}>
                                <Image style={styles.headerImage} source={{uri: el.photos[1]}}/>
                                <View style={styles.bottomContainer}>
                                    <Image style={styles.logoImage} source={{uri: el.logo}}/>
                                    <View style={styles.rightContainer}>
                                        <Text ellipsizeMode="tail" numberOfLines={1}
                                              style={styles.gameName}>{el.name}</Text>
                                        <Text style={styles.category}>Category.{el.get_category.title}</Text>
                                        <View style={{flexDirection: "row", alignItems: "center"}}>
                                            <Text numberOfLines={1} ellipsizeMode={"tail"}
                                                  style={styles.status}>{el.type}</Text>
                                        </View>
                                    </View>
                                </View>
                            </Pressable>
                        )
                    })}
                </ScrollView>
            </View>
        )
    )
}

const styles = StyleSheet.create({
    container: {
        padding: SIZES.padding
    },
    headerText: {
        ...FONTS.body3,
        color: COLORS.black
    },
    headerTextContainer: {
        paddingStart: SIZES.padding - 4,
        marginBottom: SIZES.padding
    },
    bodyContainer: {
        width: 230,
        marginEnd: SIZES.padding
    },
    headerImage: {
        width: '100%',
        height: 130,
        borderRadius: SIZES.radius
    },
    bottomContainer: {
        paddingVertical: SIZES.padding,
        flexDirection: "row",

    },
    gameName: {
        ...FONTS.body4,
        color: COLORS.black,
        width: '55%'
    },
    logoImage: {
        width: 60,
        height: 60,
        borderRadius: SIZES.radius
    },
    category: {
        ...FONTS.body5,
        color: COLORS.secondary
    },
    status: {
        ...FONTS.body6,
        color: COLORS.secondary,
        width: '30%',
    },
    rightContainer: {
        marginStart: SIZES.padding - 4,
        justifyContent: "space-around",
        width: '100%'
    }
})

export default PopularGameComponent
