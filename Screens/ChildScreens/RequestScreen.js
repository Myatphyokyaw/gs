import React, {useState} from "react";
import {Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity} from "react-native";
import {COLORS, FONTS, SIZES} from "../../Themes/theme";
import Feather from "react-native-vector-icons/Feather";
import RequestHeaderBarComponent from "../../Components/RequestHeaderBarComponent";

const RequestScreen = props => {
    const [radio1, setRadio1] = useState(false)
    const [radio2, setRadio2] = useState(false)
    const radioButtonsData = [{
        id: '1',
        label: 'Online',
        value: 'option1'
    }, {
        id: '2',
        label: 'Offline',
        value: 'option2'
    }]

    const chooseStatus = (id) => {
        if (id === 1) {
            setRadio1(true)
            setRadio2(false)
        } else {
            setRadio2(true)
            setRadio1(false)
        }
    }

    return (
        <View style={styles.container}>
            <RequestHeaderBarComponent/>
            <View style={styles.requestContainer}>
                <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
                    <View style={{width: '100%', alignItems: "center"}}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputPlaceHolder}>Your Name *</Text>
                            <TextInput selectionColor={COLORS.primary} placeholder="" style={styles.nameInput}/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputPlaceHolder}>Game Name *</Text>
                            <TextInput selectionColor={COLORS.primary} placeholder="" style={styles.nameInput}/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputPlaceHolder}>Choose Online or Offline *</Text>
                            <View style={styles.radioContainer}>
                                <TouchableOpacity onPress={() => chooseStatus(1)}
                                                  style={[styles.onlineBtn, {backgroundColor: radio1 ? COLORS.success : COLORS.white}]}>
                                    <View style={styles.textIconContainer}>
                                        <Text style={{
                                            ...FONTS.body3,
                                            color: radio1 ? COLORS.white : COLORS.black
                                        }}>Online</Text>
                                        <Feather size={18} color={radio1 ? COLORS.white : COLORS.black} name="wifi"/>
                                    </View>

                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => chooseStatus(2)}
                                                  style={[styles.offlineBtn, {backgroundColor: radio2 ? COLORS.primary : COLORS.white}]}>
                                    <View style={styles.textIconContainer}>
                                        <Text style={{
                                            ...FONTS.body3,
                                            color: radio2 ? COLORS.white : COLORS.black
                                        }}>Offline</Text>
                                        <Feather size={18} color={radio2 ? COLORS.white : COLORS.black}
                                                 name="wifi-off"/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputPlaceHolder}>PlayStore Link *</Text>
                            <TextInput selectionColor={COLORS.primary} style={styles.nameInput}/>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputPlaceHolder}>Game Review ( optional )</Text>
                            <TextInput multiline numberOfLines={7} selectionColor={COLORS.primary} style={styles.reviewInput}/>
                        </View>
                        <View style={styles.inputContainer}>
                            <TouchableOpacity style={styles.submitBtn}>
                                <Text style={{color:COLORS.white,...FONTS.body3}}>Submit</Text>
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
        flex:1,
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
        borderWidth:0.1,
        borderColor:COLORS.lightGray3,
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
    reviewInput:{
        width: '100%',
        ...FONTS.body5,
        justifyContent: "flex-start",
        textAlignVertical: 'top',
        borderWidth:0.1,
        borderColor:COLORS.lightGray3,
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
    submitBtn:{
        height:43,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.roundRadius
    }
})

export default RequestScreen
