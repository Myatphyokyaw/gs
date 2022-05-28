import React from "react";
import {View, StyleSheet, TouchableOpacity, Text} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS, FONTS, SIZES} from "../Themes/theme";
import {useNavigation} from "@react-navigation/native";

const DetailHeaderBarComponent = props => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{flex: 0.5}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-outline" color={COLORS.black} size={30}/>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.headerText}>Detail</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: SIZES.padding,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:COLORS.white,
        shadowColor: "rgba(0,0,0,0.22)",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 3,
        shadowRadius: 5,

        elevation: 10,
    },
    headerText: {
        ...FONTS.body2,
        color: COLORS.black
    },
})

export default DetailHeaderBarComponent
