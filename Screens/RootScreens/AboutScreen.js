import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {COLORS} from "../../Themes/theme";

const AboutScreen = props => {
    return(
        <View style={styles.container}>

            <Text>This is About Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    }
})

export default AboutScreen
