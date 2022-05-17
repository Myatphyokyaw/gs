import React from "react";
import {Text, View, StyleSheet} from "react-native";
import HeaderBarComponent from "../../Components/HeaderBarComponent";
import {COLORS} from "../../Themes/theme";

const AppScreen = props => {
    return(
        <View style={styles.container}>
            <HeaderBarComponent title="Apps"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems:"center",
        backgroundColor:COLORS.white
    }
})

export default AppScreen
