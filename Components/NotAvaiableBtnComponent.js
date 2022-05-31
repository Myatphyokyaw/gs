import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {COLORS, SIZES} from "../Themes/theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const NotAvailableBtnComponent = props => {
    return(
        <View style={[styles.container,{width : props.width}]}>
            <MaterialIcons name="block" size={15}/>
          <Text>NotAvailable {props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:40,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:COLORS.lightGray2,
        borderRadius:SIZES.radius,
    }
})

export default NotAvailableBtnComponent


