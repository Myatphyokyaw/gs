import React from "react";
import {TouchableOpacity, StyleSheet, Text} from "react-native";
import {COLORS, FONTS, SIZES} from "../Themes/theme";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const HelpBtnComponent = props => {
    return (
        <TouchableOpacity style={styles.container}>
            <FontAwesome5 size={15} color={COLORS.white} name="headset"/>
            <Text style={{...FONTS.body5, color: COLORS.white,marginTop:2}}>Help</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.roundRadius * 2,
        position: "absolute",
        bottom: '3%',
        right: '5%',
        zIndex: 5000,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default HelpBtnComponent
