import React from "react";
import {View, StyleSheet, StatusBar, ScrollView} from "react-native";
import {COLORS, SIZES} from "../../Themes/theme";
import DetailHeaderBarComponent from "../../Components/DetailHeaderBarComponent";
import DetailFirstSection from "../../Components/DetailFirstSection";
import DetailSecSection from "../../Components/DetailSecSection";
import DetailDescriptionComponent from "../../Components/DetailDescriptionComponent";
import DetailVideoSectionComponent from "../../Components/DetailVideoSectionComponent";
import DetailPhotosComponent from "../../Components/DetailPhotosComponent";
import DownloadBtnSecContainer from "../../Components/DownloadBtnSecContainer";
import ShowImageModalComponent from "../../Components/ShowImageModalComponent";

const GamesDetailScreen = props => {
    const item = props.route.params
    return (

            <View style={styles.container}>
                <ShowImageModalComponent/>
                <DetailHeaderBarComponent/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.subContainer}>
                        <DetailFirstSection item={{
                            logo: item.logo,
                            name: item.name,
                            size: item.size,
                            version: item.version,
                            category: item.get_category.title,
                            type: item.type
                        }}/>
                        <DetailSecSection item={item}/>
                        <DetailDescriptionComponent des={item.description}/>
                        <DetailVideoSectionComponent/>
                        <DetailPhotosComponent demoImg={item.photos_thumbnail} fullImg={item.photos}/>
                        <DownloadBtnSecContainer link1={item.link1} link2={item.link2} link3={item.link3}/>
                    </View>
                </ScrollView>
            </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.blackSecondary
    },
    subContainer: {
        paddingVertical: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding
    },

})

export default GamesDetailScreen;
