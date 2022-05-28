import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {COLORS, FONTS, SIZES} from "../Themes/theme";

const DetailDescriptionComponent = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>ဂိမ်းအကြောင်း</Text>
            <Text style={styles.description}>{props.des}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        shadowColor: COLORS.shadow,
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: SIZES.radius,
        marginTop: SIZES.padding,
        paddingVertical: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 2,
    },
    header: {
        ...FONTS.body3,
        color: COLORS.black,
        marginBottom: SIZES.padding
    },
    description: {
        ...FONTS.body5,
        lineHeight: 21,
        textAlign: "left",
        color: COLORS.secondary
    }
})

export default DetailDescriptionComponent
