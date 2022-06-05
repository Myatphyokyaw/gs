import React from "react";
import {Text, View, StyleSheet} from "react-native";
import LottieView from "lottie-react-native";
import {COLORS, SIZES} from "../Themes/theme";

const EmptyNotiComponent = props => {
    return (
        <View style={styles.container}>
            <LottieView style={styles.lottie} autoPlay={true} loop={true}
                        source={require("../Graphics/Lotties/emptyNoti.json")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        justifyContent: "center",
        alignItems: "center"
    },
    lottie: {
        width: SIZES.width / 2,
        height: SIZES.height / 2,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default EmptyNotiComponent
