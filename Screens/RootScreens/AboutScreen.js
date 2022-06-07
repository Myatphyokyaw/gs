import React from "react";
import {Text, View, StyleSheet, Image, StatusBar, TouchableOpacity, Pressable, ToastAndroid} from "react-native";
import {COLORS, FONTS, SIZES} from "../../Themes/theme";
import AboutHeaderComponent from "../../Components/AboutHeaderComponent";
import VersionCheck from 'react-native-version-check';
import Ionicons from "react-native-vector-icons/Ionicons";

const AboutScreen = props => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} animated={true} barStyle={"light-content"}/>
            <AboutHeaderComponent/>
            <View style={styles.subContainer}>
                <View style={styles.cardContainer}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require("../../Graphics/Images/main_logo.png")}/>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>App Name</Text>
                        <Text style={styles.text}>G & S</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>App Version</Text>
                        <Text style={styles.text}>{"v" + VersionCheck.getCurrentVersion()}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>Build Number</Text>
                        <Text style={styles.text}>{VersionCheck.getCurrentBuildNumber()}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>Package Name</Text>
                        <Text style={styles.text}>{VersionCheck.getPackageName()}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>Supported Android Version</Text>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            <Text style={styles.text}>5</Text>
                            <Ionicons color={COLORS.black} name="arrow-up" size={15}/>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Pressable onPress={()=>ToastAndroid.show("This app is not avaiable on playstore.",2000)} android_ripple={{color: COLORS.lightGray}}
                                   style={[styles.btn, {backgroundColor: COLORS.primary}]}>
                            <Ionicons name="arrow-up-circle-sharp" size={15} color={COLORS.white}/>
                            <Text style={styles.btnText}>Check Update</Text>
                        </Pressable>
                        <Pressable onPress={()=>ToastAndroid.show("This app is not avaiable on playstore.",2000)} android_ripple={{color: COLORS.lightGray}}
                                   style={[styles.btn, {backgroundColor: COLORS.gray}]}>
                            <Ionicons name="star" size={15} color={COLORS.white}/>
                            <Text style={styles.btnText}>Rating Our App</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <Text style={styles.copyRight}>
                @2022.GSTEAM.All rights reserved v{VersionCheck.getCurrentVersion()}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    subContainer: {
        flex: 0.75,
        paddingHorizontal: SIZES.padding,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white
    },
    logo: {
        width: 70,
        height: 70,
    },
    logoContainer: {
        width: 100,
        height: 100,
        borderRadius: SIZES.radius * 2,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SIZES.padding,
        backgroundColor: COLORS.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    cardContainer: {
        width: '100%',
        paddingHorizontal: SIZES.padding,
        paddingTop: SIZES.padding,
        paddingBottom: SIZES.padding,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    row: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between",
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding - 5,
    },
    text: {
        ...FONTS.body4,
        color: COLORS.black
    },

    btn: {
        width: '48%',
        height: 45,
        borderRadius: SIZES.radius,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: SIZES.padding,
        backgroundColor: COLORS.primary,
        elevation: 4,
    },
    btnText: {
        ...FONTS.body5,
        color: COLORS.white,
        marginStart: SIZES.padding - 5
    },
    copyRight: {
        position: "absolute",
        bottom: '2%',
        textAlign: "center",
        width: '100%',
        ...FONTS.body4,
        color: COLORS.gray
    }
})

export default AboutScreen
