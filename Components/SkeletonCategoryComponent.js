import React from "react";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import {View,StyleSheet} from "react-native";
import {SIZES} from "../Themes/theme";

const SkeletonCategoryComponent = props => {
    return(
        <View>
            <SkeletonPlaceholder>
                <View style={styles.categoryBtn}>
                </View>
            </SkeletonPlaceholder>
        </View>
    )
}


const styles = StyleSheet.create({
    categoryBtn: {
        width: 100,
        height: 35,
        borderRadius: SIZES.roundRadius,
        marginVertical: SIZES.padding,
        marginEnd: SIZES.padding,
        marginStart: 0.5
    },
})


export default SkeletonCategoryComponent
