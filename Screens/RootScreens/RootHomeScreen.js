import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import GameScreen from "../ChildScreens/GameScreen";
import {StyleSheet, Text, View} from "react-native";
import AppScreen from "../ChildScreens/AppScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS, FONTS, SIZES} from "../../Themes/theme";
import RequestScreen from "../ChildScreens/RequestScreen";
import NotificationScreen from "./NotificationScreen";

const BottomTab = createBottomTabNavigator()

const RootHomeScreen = props => {
    return (
        <BottomTab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
            tabBarHideOnKeyboard: true,
            tabBarItemStyle: styles.tabBarItem
        }}>
            <BottomTab.Screen options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={[styles.tabBarBtnContainer,{backgroundColor:focused ? COLORS.primaryTransparent : COLORS.transparent}]}>
                            <Ionicons color={COLORS.primary}
                                      name={"game-controller-outline"} size={20}/>
                            {
                                focused ? (
                                    <Text
                                        style={styles.text}>Games</Text>
                                ) : null
                            }
                        </View>
                    )
                }
            }} name="GameScreen" component={GameScreen}/>
            <BottomTab.Screen options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={[styles.tabBarBtnContainer,{backgroundColor:focused ? COLORS.primaryTransparent : COLORS.transparent}]}>
                            <Ionicons color={COLORS.primary}
                                      name={"md-cube-outline"} size={20}/>
                            {
                                focused ? (
                                    <Text
                                        style={styles.text}>Apps</Text>
                                ) : null
                            }
                        </View>
                    )
                }
            }} name="AppScreen" component={AppScreen}/>
            <BottomTab.Screen options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={[styles.tabBarBtnContainer,{backgroundColor:focused ? COLORS.primaryTransparent : COLORS.transparent}]}>
                            <Ionicons color={COLORS.primary}
                                      name={"paper-plane-outline"} size={20}/>
                            {
                                focused ? (
                                    <Text
                                        style={styles.text}>Request</Text>
                                ) : null
                            }
                        </View>
                    )
                }
            }} name="RequestScreen" component={RequestScreen}/>
            <BottomTab.Screen options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={[styles.tabBarBtnContainer,{backgroundColor:focused ? COLORS.primaryTransparent : COLORS.transparent}]}>
                            <Ionicons color={COLORS.primary}
                                      name={"notifications-outline"} size={20}/>
                            {
                                focused ? (
                                    <Text
                                        style={styles.text}>Noti</Text>
                                ) : null
                            }
                        </View>
                    )
                }
            }} name="NotificationScreen" component={NotificationScreen}/>
        </BottomTab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
    },
    tabBarBtnContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"row",
        paddingVertical:SIZES.padding - 4,
        paddingHorizontal:SIZES.padding,
        borderRadius:SIZES.roundRadius,
    },
    text : {
        color:COLORS.primary,
        ...FONTS.body5,
        marginStart:SIZES.padding - 5,
    }
})

export default RootHomeScreen
