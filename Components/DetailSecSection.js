import React from "react";
import {View, StyleSheet, Text, ScrollView} from "react-native";
import {COLORS, FONTS, SIZES} from "../Themes/theme";
import DetailTextComponent from "./DetailTextComponent";

const DetailSecSection = props => {
    const item = props.item
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                    <Text style={styles.header}>GAME INFO</Text>
                    <DetailTextComponent title="Name" name={item.name}/>
                    <DetailTextComponent title="Type" name={item.type}/>
                    <DetailTextComponent title="Size" name={item.size}/>
                    <DetailTextComponent title="Version" name={item.version}/>
                    <DetailTextComponent title="Requirement" name={item.requirement}/>
                    <DetailTextComponent title="Version" name={item.version}/>
                    <DetailTextComponent title="Developer" name={item.developer}/>
                    <DetailTextComponent title="Category" name={item.get_category.title}/>
                </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: SIZES.padding
    },
    header: {
        ...FONTS.body3,
        color: COLORS.black,
        marginBottom:SIZES.padding * 1.4
    },
    subContainer: {
        backgroundColor: COLORS.white,
        shadowColor: COLORS.shadow,
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: SIZES.radius,
        marginTop: SIZES.padding,
        paddingTop: SIZES.padding * 1.4,
        paddingBottom:5,
        paddingHorizontal: SIZES.padding * 2,
    },
})

export default DetailSecSection
