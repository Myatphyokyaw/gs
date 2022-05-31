import React, {useContext, useEffect, useState} from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    ToastAndroid,
    Modal,
    Pressable, Image,
} from "react-native";
import {COLORS, FONTS, SIZES} from "../../Themes/theme";
import RequestHeaderBarComponent from "../../Components/RequestHeaderBarComponent";
import {Context} from "../../Navigations/Provider";
import axios from "axios";
import LottieView from "lottie-react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PushNotification from "react-native-push-notification";

const RequestScreen = props => {
    const [name, setName] = useState("")
    const [appName, setAppName] = useState("")
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")
    const {requestGameData, postRequestGame, setNetWorkModal} = useContext(Context)
    const [load, setLoad] = useState(false)
    const [successModal, setSuccessModal] = useState(false)
    const [response, setResponse] = useState("")
    const [nameValidate, setNameValidate] = useState(true)
    const [appNameValidate, setAppNameValidate] = useState(true)
    const [descriptionValidate, setDescriptionValidate] = useState(true)
    const [linkValidate, setLinkValidate] = useState(true)

    useEffect(() => {
        createChannels()
    })

    const handleNotification = (responseData) => {
        PushNotification.localNotification({
            channelId: "test-channel",
            title: "Your request was successful.",
            message: responseData,
            vibrate: true,
            vibration: 1000,
            id: 1,
            largeIcon: "ic_notification",
            smallIcon: "ic_notification",
        })
    }

    const createChannels = () => {
        PushNotification.createChannel({
            channelId: "test-channel",
            channelName: "Test Channel",
        })
    }

    const handleSubmit = async () => {
        if (name && appName && description && link) {
            setLoad(true)
            let data = JSON.stringify({
                app_name: appName,
                username: name,
                description: description,
                playstore_link: link
            })
            let config = {
                method: 'post',
                url: 'http://192.168.1.28/project/public/api/v1',
                headers: {
                    'X-hardik': '123456',
                    'Content-Type': 'application/json'
                },
                data: data
            };
            axios(config)
                .then(function (response) {
                    const responseData = JSON.stringify(response.data)
                    setResponse(responseData)
                    setName("")
                    setAppName("")
                    setLink("")
                    setDescription("")
                    setLoad(false)
                    handleNotification(responseData)
                })
                .catch(function (error) {
                    console.log(error);
                    if (error.message === "Network Error") {
                        setNetWorkModal(true)
                    }
                    setLoad(false)
                    ToastAndroid.show("Something went wrong", 20)
                });
        } else {
            if (!name) {
                setNameValidate(false)
            }
            if (!appName) {
                setAppNameValidate(false)
            }
            if (!description) {
                setDescriptionValidate(false)
            }
            if (!link) {
                setLinkValidate(false)
            }
        }
    }

    const handleClearForm = () => {
        setName("")
        setAppName("")
        setLink("")
        setDescription("")
        setNameValidate(true)
        setAppNameValidate(true)
        setLinkValidate(true)
        setDescriptionValidate(true)
        ToastAndroid.show("Clear Form", 10)
    }

    return (
        <View style={styles.container}>
            <RequestHeaderBarComponent/>
            <Modal transparent={true} visible={load}>
                <View style={styles.modalContainer}>
                    <View style={styles.subContainer}>
                        <LottieView style={{width: 60, height: 60}} autoPlay={true} loop
                                    source={require("../../Graphics/Lotties/sendData.json")}/>
                        <Text style={{color: COLORS.primary, ...FONTS.body3, marginTop: SIZES.padding}}>Please
                            Wait...</Text>
                    </View>
                </View>
            </Modal>
            <Modal transparent={true} visible={successModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.successModal}>
                        <Pressable style={styles.closeBtn}
                                   onPress={() => setSuccessModal(false)}
                                   android_ripple={{color: COLORS.darkgray, borderless: true}}>
                            <Ionicons color={COLORS.gray} size={30} name="close"/>
                        </Pressable>
                        <LottieView onAnimationFinish={() => setSuccessModal(false)} style={{width: 200, height: 150}}
                                    autoPlay={true}
                                    source={require("../../Graphics/Lotties/success.json")}/>
                        <Text style={{
                            color: COLORS.secondary, ...FONTS.body3,
                            textAlign: "center",
                            lineHeight: 24,
                            marginTop: SIZES.padding * 2
                        }}>{response}</Text>
                    </View>
                </View>
            </Modal>
            <View style={styles.requestRootContainer}>
                <View style={styles.requestContainer}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
                        <View style={{width: '100%', alignItems: "center"}}>
                            <View style={styles.inputContainer}>
                                <Text style={[styles.inputPlaceHolder,{color:nameValidate ? COLORS.secondary : COLORS.danger}]}>Your Name *</Text>
                                <TextInput value={name} onChangeText={(text) => setName(text)}
                                           selectionColor={COLORS.primary}
                                           placeholder=""
                                           style={[styles.nameInput, {
                                               borderWidth: nameValidate ? 0 : 0.8,
                                               borderColor: nameValidate ? COLORS.lightGray3 : COLORS.danger
                                           }]}/>
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={[styles.inputPlaceHolder,{color:appNameValidate ? COLORS.secondary : COLORS.danger}]}>Game Name *</Text>
                                <TextInput value={appName} onChangeText={(text) => setAppName(text)}
                                           selectionColor={COLORS.primary}
                                           placeholder=""
                                           style={[styles.nameInput, {
                                               borderWidth: appNameValidate ? 0 : 0.8,
                                               borderColor: appNameValidate ? COLORS.lightGray3 : COLORS.danger
                                           }]}/>
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={[styles.inputPlaceHolder,{color:linkValidate ? COLORS.secondary : COLORS.danger}]}>PlayStore Link *</Text>
                                <TextInput value={link} onChangeText={(text) => setLink(text)}
                                           selectionColor={COLORS.primary}
                                           style={[styles.nameInput, {
                                               borderWidth: linkValidate ? 0 : 0.8,
                                               borderColor: linkValidate ? COLORS.lightGray3 : COLORS.danger
                                           }]}/>
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={[styles.inputPlaceHolder,{color:descriptionValidate ? COLORS.secondary : COLORS.danger}]}>Game Review and online Offline *</Text>
                                <TextInput value={description} onChangeText={(text) => setDescription(text)} multiline
                                           numberOfLines={7}
                                           selectionColor={COLORS.primary}
                                           style={[styles.reviewInput, {
                                               borderWidth: descriptionValidate ? 0 : 0.8,
                                               borderColor: descriptionValidate ? COLORS.lightGray3 : COLORS.danger
                                           }]}/>
                            </View>
                            <View style={styles.inputContainer}>
                                <View style={styles.btnContainer}>
                                    <Pressable android_ripple={{color: COLORS.lightGray3}}
                                               onPress={() => handleClearForm()}
                                               style={[styles.submitBtn, {backgroundColor: COLORS.gray}]}>
                                        <Ionicons name="trash" color={COLORS.white} size={20}/>
                                        <Text style={styles.btnText}>Clear Form</Text>
                                    </Pressable>
                                    <Pressable android_ripple={{color: COLORS.lightGray3}}
                                               onPress={() => handleSubmit()}
                                               style={[styles.submitBtn, {backgroundColor: COLORS.primary}]}>
                                        <Ionicons name="document-text" color={COLORS.white} size={20}/>
                                        <Text style={styles.btnText}>Submit</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.white,
    },
    requestRootContainer:{
      padding:SIZES.padding
    },
    requestContainer: {
        alignItems: "center",
        width:'100%',
        paddingHorizontal: SIZES.padding,
        paddingTop:SIZES.padding,
        paddingBottom:SIZES.padding * 2,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
    },
    requestHeaderText: {
        ...FONTS.body2,
        color: COLORS.primary,
        marginBottom: SIZES.padding * 2
    },
    nameInput: {
        height: 45,
        width: '100%',
        ...FONTS.body3,
        borderRadius: SIZES.radius,
        marginBottom: SIZES.padding * 2,
        borderColor: COLORS.lightGray3,
        paddingHorizontal: SIZES.padding * 1.4,
        backgroundColor: "#f2f3f5",
        color: COLORS.black
    },
    reviewInput: {
        width: '100%',
        ...FONTS.body5,
        justifyContent: "flex-start",
        textAlignVertical: 'top',
        borderColor: COLORS.lightGray3,
        borderRadius: SIZES.radius,
        marginBottom: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 1.4,
        backgroundColor: "#f2f3f5",
        color: COLORS.black
    },
    inputPlaceHolder: {
        marginBottom: SIZES.padding,
        ...FONTS.body4,
        marginStart: 1
    },
    inputContainer: {
        marginTop: SIZES.padding - 3,
        width: '98%'
    },
    textIconContainer: {
        flexDirection: 'row',
        alignItems: "center",
        width: '50%',
        justifyContent: "space-evenly"
    },
    btnContainer: {
        flexDirection: "row",
        width: '100%',
        justifyContent: "space-between"
    },
    submitBtn: {
        height: 43,
        width: '48%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.radius,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        marginBottom:3
    },
    btnText: {
        color: COLORS.white,
        ...FONTS.body4,
        marginStart: SIZES.padding - 7
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.8)"
    },
    subContainer: {
        width: 150,
        height: 150,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.radius
    },
    successModal: {
        width: SIZES.width / 1.2,
        height: SIZES.height / 3,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: SIZES.padding * 1.3,
    },
    closeBtn: {
        position: "absolute",
        top: 10,
        right: 10
    }
})

export default RequestScreen
