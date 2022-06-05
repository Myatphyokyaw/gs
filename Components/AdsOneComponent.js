import React from "react";
import {View, StyleSheet, Text, Image} from "react-native";
import {COLORS, SIZES} from "../Themes/theme";

const AdsOneComponent = props => {
    return (
        <View style={styles.imageContainer}>
            <Image style={styles.image}
                   source={{uri: "https://www.wordstream.com/wp-content/uploads/2021/07/persuasive-ads-coca-cola-1.jpg"}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white
    },
    image: {
        width: '100%',
        height: 80,
        borderRadius: SIZES.radius,
    }
})

export default AdsOneComponent
