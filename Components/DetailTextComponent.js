import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {COLORS, FONTS, SIZES} from "../Themes/theme";

const DetailTextComponent = props => {
    return(
        <View style={styles.textContainer}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        ...FONTS.body4,
        color: COLORS.secondary
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom:SIZES.padding * 2
    }
})

export default DetailTextComponent
