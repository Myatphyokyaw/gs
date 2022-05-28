import React, {useContext} from "react";
import {View, StyleSheet, Modal, Image} from "react-native";
import styles from "react-native-webview/lib/WebView.styles";
import {Context} from "../Navigations/Provider";

const ModalComponent = props => {
    const {modalVisible, setModalVisible, imgUrl, setImgUrl} = useContext(Context)
    return (
        <View style={styles.container}>
            <Modal visible={modalVisible}>
                <Image style={styles.fullImage} source={{uri: imgUrl}}/>
            </Modal>
        </View>
    )
}



export default ModalComponent
