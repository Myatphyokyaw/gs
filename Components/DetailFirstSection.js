import React from "react";
import {View, StyleSheet, Image, Text} from "react-native";
import {COLORS, FONTS, SIZES} from "../Themes/theme";

const DetailFirstSection = props => {
    const item = props.item
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={{uri: item.logo}}/>
            </View>
            <View style={styles.rightContainer}>
                <View style={{height: 20}}>
                    <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 4}}>
                    <Text style={styles.version}>size{item.size},</Text>
                    <Text style={styles.version}>v{item.version}</Text>
                </View>
                <View style={styles.badgeContainer}>
                    <View style={styles.categoryBadge}>
                        <Text style={styles.categoryName}>{item.category}</Text>
                    </View>
                    <View
                        style={(item.type.toLowerCase().trim().split('')[1] === 'f') ? styles.offlineBadge : styles.onlineBadge}>
                        <Text style={styles.categoryName}>{
                            (item.type.toLowerCase().trim().split('')[1] === 'f') ? "Offline" : "Online"
                        }</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: SIZES.padding
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: SIZES.radius
    },
    name: {
        ...FONTS.h5,
        color: COLORS.black,
        width:'90%'
    },
    version: {
        ...FONTS.body5,
        color: COLORS.black
    },
    rightContainer: {
        paddingHorizontal: SIZES.padding,
        justifyContent: "space-between"
    },
    categoryBadge: {
        width: 70,
        height: 18,
        borderRadius: SIZES.roundRadius,
        backgroundColor: COLORS.yellow,
        justifyContent: "center",
        alignItems: "center",
        marginEnd: SIZES.padding,
    },
    categoryName: {
        color: COLORS.white,
        ...FONTS.body6,
    },
    badgeContainer: {
        flexDirection: "row"
    },
    offlineBadge: {
        width: 70,
        height: 18,
        borderRadius: SIZES.roundRadius,
        backgroundColor: COLORS.darkgray,
        justifyContent: "center",
        alignItems: "center",
    },
    onlineBadge: {
        width: 70,
        height: 18,
        borderRadius: SIZES.roundRadius,
        backgroundColor: COLORS.success,
        justifyContent: "center",
        alignItems: "center",
    },
    statusContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
})

export default DetailFirstSection
