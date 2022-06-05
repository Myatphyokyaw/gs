import React from "react";
import {ActivityIndicator, View, StyleSheet} from "react-native";
import {COLORS} from "../Themes/theme";

const NotiLoadingComponent = props => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color={COLORS.primary} size={60}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default NotiLoadingComponent
