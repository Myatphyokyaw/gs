import React from "react";
import {View, StyleSheet, Image, Text, ScrollView} from "react-native";
import {COLORS, FONTS, SIZES} from "../Themes/theme";

const SuggestGameComponent = props => {
    return (
       <View style={{paddingVertical:SIZES.padding * 2,width:'100%'}}>
          <Text></Text>
       </View>
    )
}

const styles = StyleSheet.create({
    adsImage: {
        width: '95%',
        height: 150,
        resizeMode: "cover",
        borderRadius: SIZES.radius,
    }
})

export default SuggestGameComponent
