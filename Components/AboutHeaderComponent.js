import React from "react";
import {View, StyleSheet, TouchableOpacity, Text, Pressable} from "react-native";
import {COLORS, FONTS, SIZES} from "../Themes/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";

const AboutHeaderComponent = props => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{flex: 0.5}}>
                <Pressable style={{width: 30, justifyContent: "center", alignItems: "center"}}
                           android_ripple={{color: COLORS.darkgray, borderless: true}}
                           onPress={() => navigation.goBack()}>
                    <Ionicons color={COLORS.white} size={30} name="chevron-back-outline"/>
                </Pressable>
            </View>
            <View>
                <Text style={styles.headerText}>About</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: COLORS.primary,
        shadowColor: "#000",
        flexDirection: "row",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        alignItems: "center",
        paddingHorizontal: SIZES.padding
    },
    headerText: {
        ...FONTS.body2,
        color: COLORS.white
    }
})

export default AboutHeaderComponent
