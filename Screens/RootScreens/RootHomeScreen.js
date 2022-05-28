import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import GameScreen from "../ChildScreens/GameScreen";
import {StyleSheet, Text, View} from "react-native";
import AppScreen from "../ChildScreens/AppScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS, FONTS, SIZES} from "../../Themes/theme";
import RequestScreen from "../ChildScreens/RequestScreen";
import AdServiceScreen from "./AdServiceScreen";

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
                        <View style={styles.tabBarBtnContainer}>
                            <Ionicons color={focused ? COLORS.primary : COLORS.black}
                                      name={focused ? "game-controller" : "game-controller-outline"} size={20}/>
                            <Text style={{color: focused ? COLORS.primary : COLORS.black,...FONTS.body5}}>Games</Text>
                        </View>
                    )
                }
            }} name="GameScreen" component={GameScreen}/>
            <BottomTab.Screen options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={styles.tabBarBtnContainer}>
                            <Ionicons color={focused ? COLORS.primary : COLORS.black}
                                      name={focused ? "server" : "server-outline"} size={20}/>
                            <Text style={{color: focused ? COLORS.primary : COLORS.black,...FONTS.body5}}>Apps</Text>
                        </View>
                    )
                }
            }} name="AppScreen" component={AppScreen}/>
            <BottomTab.Screen options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={styles.tabBarBtnContainer}>
                            <Ionicons color={focused ? COLORS.primary : COLORS.black}
                                      name={focused ? "paper-plane" : "paper-plane-outline"} size={20}/>
                            <Text style={{color: focused ? COLORS.primary : COLORS.black,...FONTS.body5}}>Request</Text>
                        </View>
                    )
                }
            }} name="RequestScreen" component={RequestScreen}/>
        </BottomTab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        height: '7%',
        position:"absolute",
        marginHorizontal:SIZES.padding * 3,
        borderRadius:SIZES.roundRadius,
        bottom:'2%',
        backgroundColor:"rgba(255,255,255,0.96)"
    },
    tabBarBtnContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    tabBarItem:{

    }
})

export default RootHomeScreen
