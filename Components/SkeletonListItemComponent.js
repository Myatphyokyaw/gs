import React from "react";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import {View,StyleSheet} from "react-native";
import {SIZES} from "../Themes/theme";

const SkeletonListItemComponent = props => {
    return(
        <View>
            <SkeletonPlaceholder speed={850}>
                <View style={styles.gameListContainer}>
                    <View style={styles.listItem}>
                        <View style={styles.logoImage} />
                        <View style={styles.rightContainer}>
                            <View style={{ width: SIZES.width / 1.5, height: 20, borderRadius: 4 }} />
                            <View style={{ width: SIZES.width / 2, height: 20, borderRadius: 4 }}/>
                            <View
                                style={{ width: SIZES.width / 3, height: 20, borderRadius: 4 }}
                            />
                        </View>
                    </View>
                </View>
            </SkeletonPlaceholder>
        </View>
    )
}


const styles = StyleSheet.create({
    gameListContainer: {
        padding: SIZES.padding,
    },
    listItem: {
        flexDirection: "row"
    },
    logoImage:{
        width: 80,
        height: 80,
        borderRadius: SIZES.radius
    },
    rightContainer: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding - 5,
        justifyContent: "space-between"
    },
})


export default SkeletonListItemComponent
