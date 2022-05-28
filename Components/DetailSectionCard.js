import React from "react";
import {View, StyleSheet} from "react-native";
import {COLORS, SIZES} from "../Themes/theme";

const DetailSectionCard = props => {
    return (
        <View style={styles.container}>
            {props.children}
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
    }
})

export default DetailSectionCard
