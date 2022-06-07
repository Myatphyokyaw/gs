import React, {useContext, useState} from "react";
import {View, StyleSheet, Pressable, Text, Linking, Modal, ToastAndroid} from "react-native";
import DetailSectionCard from "./DetailSectionCard";
import {COLORS, FONTS, SIZES} from "../Themes/theme";
import NotAvaiableBtnComponent from "./NotAvaiableBtnComponent";
import RNFetchBlob from "rn-fetch-blob";
import {Context} from "../Navigations/Provider";

const DownloadBtnSecContainer = props => {

    const openUrl = async (url) => {
        await Linking.openURL(url)
    }

    const {downloading, setDownloading} = useContext(Context)

    const getFileExtention = fileUrl => {
        return /[.]/.exec(fileUrl) ?
            /[^.]+$/.exec(fileUrl) : undefined;
    };

    const handleDownload = (url) => {
        setDownloading(true)
        let date = new Date();
        let file_ext = getFileExtention(url);

        file_ext = '.' + file_ext[0];

        const {config, fs} = RNFetchBlob;
        let RootDir = fs.dirs.PictureDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                path:
                    RootDir +
                    '/file_' +
                    Math.floor(date.getTime() + date.getSeconds() / 2) +
                    ".apk",
                description: 'downloading file...',
                notification: true,
                useDownloadManager: true,
            },
        };
        config(options)
            .fetch('GET', url)
            .then(res => {
                console.log('res -> ', JSON.stringify(res));
                setDownloading(false)
                ToastAndroid.showWithGravityAndOffset("Download Successfully",10,30,80,400)
            });
    }

    return (
        <DetailSectionCard>
            {
                props.link1 ? (
                    <Pressable android_ripple={{color: COLORS.lightGray}} onPress={() => handleDownload(props.link1)}
                               style={styles.downloadApkBtn}>
                        <Text style={styles.btnText}>Download APK</Text>
                    </Pressable>
                ) : (
                    <NotAvaiableBtnComponent width="100%" title="APK"/>
                )
            }
            <View style={styles.downloadOtherBtnContainer}>
                {
                    props.link2 ? (
                        <Pressable android_ripple={{color: COLORS.lightGray}}
                                   onPress={() => handleDownload(props.link2)}
                                   style={styles.downloadModBtn}>
                            <Text style={styles.btnText}>Download MOD</Text>
                        </Pressable>
                    ) : (
                        <NotAvaiableBtnComponent width="48%" title="Mod"/>
                    )
                }
                {
                    props.link3 ? (
                        <Pressable android_ripple={{color: COLORS.lightGray}}
                                   onPress={() => handleDownload(props.link3)}
                                   style={styles.downloadOtherBtn}>
                            <Text style={styles.btnText}>Download Other</Text>
                        </Pressable>
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
        borderRadius: SIZES.radius
    },
    downloadModBtn: {
        width: '48%',
        height: 40,
        backgroundColor: COLORS.yellow,
        borderRadius: SIZES.radius,
        justifyContent: "center",
        alignItems: "center"
    },
    downloadOtherBtn: {
        width: '48%',
        height: 40,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.radius,
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
    },
    modalContainer: {}
})

export default DownloadBtnSecContainer
