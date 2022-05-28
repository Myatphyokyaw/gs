import React, {useContext, useEffect, useRef, useState} from "react";
import {
    ActivityIndicator, FlatList,
    Image,
    Modal, ScrollView,
    StatusBar,
    StyleSheet,
    ToastAndroid, TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import {Context} from "../Navigations/Provider";
import {COLORS, SIZES} from "../Themes/theme";
import Ionicons from "react-native-vector-icons/Ionicons";

const ShowImageModalComponent = props => {
    const {modalVisible, setModalVisible, fullImgList, index} = useContext(Context)
    const [loading, setLoading] = useState(true)

    const isError = () => {
        ToastAndroid.show("Please Check Your Internet Connection", 1000)
        setModalVisible(false)
    }

    return (
        <Modal onRequestClose={() => setModalVisible(false)} animated={true} animationType={"fade"} transparent={true}
               visible={modalVisible}>
            <StatusBar barStyle={"light-content"} backgroundColor={COLORS.black} animated={true}/>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.backBtn}>
                    <Ionicons name="chevron-back-outline" size={30} color={COLORS.white}/>
                </TouchableOpacity>
                <View style={{height: SIZES.height / 3.5}}>
                    <FlatList initialScrollIndex={index} horizontal showsHorizontalScrollIndicator={false} pagingEnabled
                              data={fullImgList} keyExtractor={(item, index) => index.toString()}
                              renderItem={({item, index}) => {
                                  return (
                                      <>
                                          <View style={{
                                              alignItems: "center",
                                              justifyContent: "center",
                                              width: SIZES.width
                                          }}>
                                              {loading && (
                                                  <ActivityIndicator color={COLORS.primary} size={50}/>
                                              )}
                                              <Image onError={() => isError()}
                                                     onLoadEnd={() => setLoading(false)}
                                                     onLoadStart={()=>setLoading(true)}
                                                     style={loading ? styles.emptyImg : styles.fullImage}
                                                     source={{uri: item}}/>
                                          </View>

                                      </>
                                  )
                              }}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "rgb(0,0,0)",
    },
    fullImage: {
        width: SIZES.width,
        height: SIZES.height / 3.5,
        resizeMode: "cover"
    },
    emptyImg: {
        display: "none"
    },
    backBtn: {
        position: "absolute",
        top: 10,
        left: 10
    }
})


export default ShowImageModalComponent
