import React, {useContext, useEffect} from "react";
import {View, StyleSheet, FlatList, Text} from "react-native";
import {COLORS, SIZES} from "../../Themes/theme";
import NotificationItemComponent from "../../Components/NotificationItemComponent";
import NotiHeaderComponent from "../../Components/NotiHeaderComponent";
import {Context} from "../../Navigations/Provider";
import {useFocusEffect} from "@react-navigation/native";
import EmptyNotiComponent from "../../Components/EmptyNotiComponent";
import NotiLoadingComponent from "../../Components/NotiLoadingComponent";


const NotificationScreen = props => {
    const {getNoti, setNoti, notificationData, notiLoad, setNotiLoad, emptyNoti, setEmptyNoti} = useContext(Context)

    const getData = async () => {
        await getNoti()
    }

    useFocusEffect(
        React.useCallback(() => {
            getData().then(() => {
                console.log(notificationData)
            })
        }, [])
    );

    return (
        <View style={styles.container}>
            <NotiHeaderComponent/>
            <View style={styles.subContainer}>
                {
                    notiLoad ? (
                        <NotiLoadingComponent/>
                    ) : (
                        emptyNoti ? (
                            <EmptyNotiComponent/>
                        ) : (
                            <FlatList data={notificationData} renderItem={({item, index}) => {
                                return (
                                    <NotificationItemComponent title={item.title} desc={item.desc} time={item.time}/>
                                )
                            }}/>
                        )
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    subContainer: {
        paddingTop: SIZES.padding * 2,
        flex: 1
    }
})

export default NotificationScreen
