import React from "react";
import {View, StyleSheet, TouchableOpacity, Text, Linking} from "react-native";
import DetailSectionCard from "./DetailSectionCard";
import {COLORS, FONTS, SIZES} from "../Themes/theme";
import NotAvaiableBtnComponent from "./NotAvaiableBtnComponent";

const DownloadBtnSecContainer = props => {

    const openUrl = async (url) => {
        await Linking.openURL(url)
    }

    return (
        <DetailSectionCard>
            {
                props.link1 ? (
                    <TouchableOpacity onPress={() => openUrl(props.link1)} style={styles.downloadApkBtn}>
                        <Text style={styles.btnText}>Download APK</Text>
                    </TouchableOpacity>
                ) : (
                    <NotAvaiableBtnComponent width="100%" title="APK"/>
                )
            }
            <View style={styles.downloadOtherBtnContainer}>
                {
                    props.link2 ? (
                        <TouchableOpacity onPress={() => openUrl(props.link2)} style={styles.downloadModBtn}>
                            <Text style={styles.btnText}>Download MOD</Text>
                        </TouchableOpacity>
                    ) : (
                        <NotAvaiableBtnComponent width="48%" title="Mod"/>
                    )
                }
                {
                    props.link3 ? (
                        <TouchableOpacity onPress={() => openUrl(props.link3)} style={styles.downloadOtherBtn}>
                            <Text style={styles.btnText}>Download Other</Text>
                        </TouchableOpacity>
                    ) : (
                        <NotAvaiableBtnComponent width="48%" title="Other"/>
                    )
                }
            </View>
        </DetailSectionCard>
    )
}

const styles = StyleSheet.create({
    downloadApkBtn: {
        height: 40,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.roundRadius
    },
    downloadModBtn: {
        width: '48%',
        height: 40,
        backgroundColor: COLORS.yellow,
        borderRadius: SIZES.roundRadius,
        justifyContent: "center",
        alignItems: "center"
    },
    downloadOtherBtn: {
        width: '48%',
        height: 40,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.roundRadius,
        justifyContent: "center",
        alignItems: "center"
    },
    btnText: {
        ...FONTS.body4,
        color: COLORS.white
    },
    downloadOtherBtnContainer: {
        flexDirection: "row",
        marginTop: SIZES.padding,
        justifyContent: "space-between"
    }
})

export default DownloadBtnSecContainer
