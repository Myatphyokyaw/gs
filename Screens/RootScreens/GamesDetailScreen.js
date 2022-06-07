import React, {useContext, useState} from "react";
import {View, StyleSheet, StatusBar, ScrollView, Modal, Text} from "react-native";
import {COLORS, FONTS, SIZES} from "../../Themes/theme";
import DetailHeaderBarComponent from "../../Components/DetailHeaderBarComponent";
import DetailFirstSection from "../../Components/DetailFirstSection";
import DetailSecSection from "../../Components/DetailSecSection";
import DetailDescriptionComponent from "../../Components/DetailDescriptionComponent";
import DetailVideoSectionComponent from "../../Components/DetailVideoSectionComponent";
import DetailPhotosComponent from "../../Components/DetailPhotosComponent";
import DownloadBtnSecContainer from "../../Components/DownloadBtnSecContainer";
import ShowImageModalComponent from "../../Components/ShowImageModalComponent";
import LottieView from "lottie-react-native";
import {Context} from "../../Navigations/Provider";

const GamesDetailScreen = props => {
    const item = props.route.params
    const {downloading,setDownloading} = useContext(Context)
    return (
        <>
            <Modal transparent={true} visible={downloading}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalSubContainer}>
                        <LottieView style={styles.lottie} autoPlay={true} loop={true}
                                    source={require("../../Graphics/Lotties/download.json")}/>
                        <Text style={{color:COLORS.primary,...FONTS.body3}}>Downloading ...</Text>
                    </View>
                </View>
            </Modal>
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
        </>

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
    modalContainer: {
        backgroundColor: 'rgba(0,0,0,0.49)',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalSubContainer: {
        backgroundColor: COLORS.white,
        height: SIZES.height / 3,
        width: SIZES.width / 1.2,
        borderRadius: SIZES.radius,
        justifyContent:"center",
        alignItems:"center"
    },
    lottie: {
        width: SIZES.width / 4
    }

})

export default GamesDetailScreen;
