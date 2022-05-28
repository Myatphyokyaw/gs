import React, {useContext, useState} from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ToastAndroid,
    Modal,
    ActivityIndicator
} from "react-native";
import {COLORS, FONTS, SIZES} from "../../Themes/theme";
import RequestHeaderBarComponent from "../../Components/RequestHeaderBarComponent";
import {Context} from "../../Navigations/Provider";
import axios from "axios";
import LottieView from "lottie-react-native";

const RequestScreen = props => {
    const [name, setName] = useState("")
    const [appName, setAppName] = useState("")
    const [description, setDescription] = useState("")
    const [link, setLink] = useState("")
    const {requestGameData, postRequestGame, setNetWorkModal} = useContext(Context)
    const [load, setLoad] = useState(false)
    const [successModal, setSuccessModal] = useState(false)
    const [response, setResponse] = useState("")
    const handleSubmit = async () => {
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
                console.log(JSON.stringify(response.data));
                setResponse(JSON.stringify(response.data))
                setName("")
                setAppName("")
                setLink("")
                setDescription("")
                setLoad(false)
                if (!load) {
                    setSuccessModal(true)
                }
            })
            .catch(function (error) {
                console.log(error);
                if (error.message === "Network Error") {
                    setNetWorkModal(true)
                }
                setLoad(false)
                ToastAndroid.show("Something went wrong", 20)
            });

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
                        <LottieView onAnimationFinish={() => setSuccessModal(false)} style={{width: 120, height: 120}}
                                    autoPlay={true}
                                    source={require("../../Graphics/Lotties/success.json")}/>
                        <Text
                            style={{
                                color: COLORS.black, ...FONTS.body4,
                                marginTop: SIZES.padding * 2
                            }}>{response}</Text>
                    </View>
                </View>
            </Modal>

            <View style={styles.requestContainer}>
                <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
                    <View style={{width: '100%', alignItems: "center"}}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputPlaceHolder}>Your Name *</Text>
                            <TextInput value={name} onChangeText={(text) => setName(text)}
                                       selectionColor={COLORS.primary}
                                       placeholder="" style={styles.nameInput}/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputPlaceHolder}>Game Name *</Text>
                            <TextInput value={appName} onChangeText={(text) => setAppName(text)}
                                       selectionColor={COLORS.primary}
                                       placeholder="" style={styles.nameInput}/>
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.inputPlaceHolder}>PlayStore Link *</Text>
                            <TextInput value={link} onChangeText={(text) => setLink(text)}
                                       selectionColor={COLORS.primary}
                                       style={styles.nameInput}/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputPlaceHolder}>Game Review and online Offline ( optional )</Text>
                            <TextInput value={description} onChangeText={(text) => setDescription(text)} multiline
                                       numberOfLines={7}
                                       selectionColor={COLORS.primary}
                                       style={styles.reviewInput}/>
                        </View>
                        <View style={styles.inputContainer}>
                            <TouchableOpacity onPress={() => handleSubmit()} style={styles.submitBtn}>
                                <Text style={{color: COLORS.white, ...FONTS.body3}}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.white
    },
    requestContainer: {
        flex: 1,
        alignItems: "center",
        padding: SIZES.padding,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        width: '100%',
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
        borderWidth: 0.1,
        borderColor: COLORS.lightGray3,
        borderRadius: SIZES.radius,
        marginBottom: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 1.4,
        backgroundColor: COLORS.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        color: COLORS.black
    },
    reviewInput: {
        width: '100%',
        ...FONTS.body5,
        justifyContent: "flex-start",
        textAlignVertical: 'top',
        borderWidth: 0.1,
        borderColor: COLORS.lightGray3,
        borderRadius: SIZES.radius,
        marginBottom: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 1.4,
        backgroundColor: COLORS.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        color: COLORS.black
    },
    inputPlaceHolder: {

        marginBottom: SIZES.padding,
        ...FONTS.body4,
        color: COLORS.secondary,
        marginStart: 1
    },
    inputContainer: {
        marginTop: SIZES.padding - 3,
        width: '98%'
    },
    radioContainer: {
        width: '98%',
        backgroundColor: COLORS.white,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: SIZES.padding
    },
    onlineBtn: {
        height: 45,
        width: "50%",
        borderBottomLeftRadius: SIZES.radius,
        borderTopLeftRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    offlineBtn: {
        height: 45,
        width: "50%",
        borderBottomRightRadius: SIZES.radius,
        borderTopRightRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    textIconContainer: {
        flexDirection: 'row',
        alignItems: "center",
        width: '50%',
        justifyContent: "space-evenly"
    },
    submitBtn: {
        height: 43,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.roundRadius
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.51)"
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
    }
})

export default RequestScreen
