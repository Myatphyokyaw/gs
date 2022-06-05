import React from "react";
import {View, StyleSheet, Text, Pressable} from "react-native";
import {COLORS, FONTS, SIZES} from "../Themes/theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const NotificationItemComponent = props => {
    let today = new Date();

    return (
        <Pressable android_ripple={{color: COLORS.lightGray2}} style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Text style={styles.notiTypeText}>{props.title}</Text>
                    <MaterialCommunityIcons size={15} name="bell-badge-outline" color={COLORS.primary}/>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <MaterialCommunityIcons name="calendar-month-outline"/>
                    <Text style={styles.notiDataText}>{props.time}</Text>
                </View>
            </View>
            <Text numberOfLines={2} ellipsizeMode={"tail"} style={styles.notiDesText}>{props.desc}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: SIZES.padding * 2,
        backgroundColor: "rgba(235,87,51,0.07)",
        justifyContent: "center",
        paddingHorizontal: SIZES.padding * 2,
        borderBottomWidth: 0.2,
        borderBottomColor: COLORS.blackSecondary
    },
    notiTypeText: {
        ...FONTS.h5,
        color: COLORS.black,
        marginEnd: SIZES.padding
    },
    notiDesText: {
        ...FONTS.body5,
        color: COLORS.darkgray,
        marginTop: SIZES.padding - 5,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    notiDataText: {
        ...FONTS.body5,
        color: COLORS.secondary,
        marginStart: SIZES.padding - 5
    }
})

export default NotificationItemComponent
