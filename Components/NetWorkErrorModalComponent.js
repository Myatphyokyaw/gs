import React, {useContext} from "react";
import {Modal, View, StyleSheet, Text, ActivityIndicator, StatusBar, TouchableOpacity, BackHandler} from "react-native";
import {Context} from "../Navigations/Provider";
import {COLORS, FONTS, SIZES} from "../Themes/theme";
import LottieView from "lottie-react-native";

const NetWorkErrorModalComponent = props => {
    const {networkModal,setNetWorkModal} = useContext(Context)
    return (
        <Modal transparent={true} animated={true}  visible={false}>
          <StatusBar backgroundColor="rgba(0,0,0,0.57)"/>
          <View style={styles.container}>
              <View style={styles.subContainer}>
                  <LottieView style={styles.lottie} source={require("../Graphics/Lotties/nointernet.json")} autoPlay={true} loop/>
                  <View style={{flex:0.5,justifyContent:"flex-end"}}>
                      <Text style={styles.text}>Please check your's internet connection !</Text>
                  </View>
                  <View style={{flex:0.35,width:'100%',justifyContent:"flex-end"}}>
                      <TouchableOpacity onPress={()=>BackHandler.exitApp()} activeOpacity={.7} style={styles.btn}>
                          <Text style={styles.btnText}>Ok I will check</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(0,0,0,0.57)"
    },
    subContainer:{
        width:SIZES.width / 1.1,
        height:SIZES.height / 4,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:COLORS.white,
        borderRadius:SIZES.radius,
        paddingHorizontal:SIZES.padding
    },
    text:{
        ...FONTS.h4,
        textAlign:"center",
        color:COLORS.primary
    },
    lottie : {
        height:100,
        alignItems:"center",
        justifyContent:'center',
        position:"absolute",
        top:'-13%',
    },
    btn:{
        borderWidth:1,
        width:'100%',
        height:40,
        borderRadius:SIZES.roundRadius,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLORS.primary,
        borderColor:COLORS.primary,
    },
    btnText:{
        ...FONTS.body3,
        color:COLORS.white
    }
})

export default NetWorkErrorModalComponent
