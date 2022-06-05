import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {COLORS, FONTS, SIZES} from "../Themes/theme";

const NotiHeaderComponent = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Notifications</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        paddingHorizontal: SIZES.padding * 2
    },
    headerText: {
        ...FONTS.h3,
        color: COLORS.black
    }
})


export default NotiHeaderComponent
