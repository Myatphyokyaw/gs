import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {COLORS, SIZES} from "../../Themes/theme";
import AdServiceHeaderComponent from "../../Components/AdServiceHeaderComponent";
import HelpBtnComponent from "../../Components/HelpBtnComponent";
import LottieView from "lottie-react-native";

const AdServiceScreen = props => {
    return (
        <View style={styles.container}>
            <AdServiceHeaderComponent title="Ads Service"/>
            <HelpBtnComponent/>
            <View style={styles.subContainer}>
                <View style={styles.adListContainer}>

                </View>
                <View style={styles.lottieContainer}>
                    <LottieView autoPlay loop style={styles.adsLottie}
                                source={require("../../Graphics/Lotties/ads.json")}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    subContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: SIZES.padding
    },
    firstContainer: {
        height: SIZES.height / 7,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        marginBottom: SIZES.padding,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    lottieContainer: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    adsLottie: {
        width: 200,
        height: SIZES.height / 3,
        alignItems: "center",
    },
    adListContainer:{
        flex:0.5,
    }
})


export default AdServiceScreen
