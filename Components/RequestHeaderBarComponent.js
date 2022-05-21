import React from "react";
import {View, StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import {COLORS, FONTS, SIZES} from "../Themes/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";

const RequestHeaderBarComponent = props => {
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <View style={{flex : 0.33,paddingStart:SIZES.padding}}>
                <Image style={styles.logo} source={require("../Graphics/Images/main_logo.png")}/>
            </View>
            <View style={{flex : 0.33,alignItems:"center"}}>
                <Text style={styles.headerText}>Request</Text>
            </View>
            <View style={{flex : 0.33,flexDirection:"row",justifyContent:"flex-end",paddingEnd:SIZES.padding}}>
                <TouchableOpacity onPress={()=>navigation.navigate("AboutScreen")}>
                    <Ionicons name="ios-information-circle" size={25} color={COLORS.primary}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height:55,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        backgroundColor:COLORS.white,
        flexDirection:"row",
        alignItems:"center"
    },
    logo : {
        width:40,
        height:40
    },
    headerText : {
        ...FONTS.body2,
        color:COLORS.primary
    }
})

export default RequestHeaderBarComponent
