import React from "react";
import {Text, View, StyleSheet, TextInput, ScrollView} from "react-native";
import {COLORS, FONTS, SIZES} from "../../Themes/theme";

const RequestScreen = props => {
    return(
        <View style={styles.container}>
                <View style={styles.requestContainer}>
                    <Text style={styles.requestHeaderText}>Link Repair & Request Game</Text>
                    <View>
                        <TextInput style={styles.nameInput}/>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:"center",
        padding:SIZES.padding,
        backgroundColor:COLORS.white
    },
    requestContainer:{
        alignItems:"center",
        padding:SIZES.padding,
        backgroundColor:COLORS.white,
        height:500,
        borderRadius:SIZES.radius,
        width:'100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    requestHeaderText:{
        ...FONTS.body3,
        color:COLORS.primary,
        marginTop:SIZES.padding
    },
    nameInput:{
        height:40,
    }
})

export default RequestScreen
