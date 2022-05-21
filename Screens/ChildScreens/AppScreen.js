import React from "react";
import {Text, View, StyleSheet} from "react-native";
import HeaderBarComponent from "../../Components/HeaderBarComponent";
import {COLORS, FONTS, SIZES} from "../../Themes/theme";
import LottieView from "lottie-react-native";

const AppScreen = props => {
    return (
        <View style={styles.container}>
            <HeaderBarComponent title="Apps"/>
            <View style={styles.subContainer}>
                <LottieView style={styles.comingLottie} autoPlay loop
                            source={require("../../Graphics/Lotties/comingsoon.json")}/>
                <Text style={styles.text}>This feature will be available in the next version</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.white,
    },
    subContainer: {
        flex: 0.8,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: SIZES.padding * 1.5
    },
    comingLottie: {
        width: 100,
        height: SIZES.height / 6
    },
    text: {
        ...FONTS.body3,
        marginTop: SIZES.padding * 3,
        color: COLORS.primary,
        textAlign: "center",
        lineHeight: 24
    }
})

export default AppScreen
