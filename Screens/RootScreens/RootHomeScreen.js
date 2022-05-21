import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import GameScreen from "../ChildScreens/GameScreen";
import {StyleSheet, Text, View} from "react-native";
import AppScreen from "../ChildScreens/AppScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS, FONTS} from "../../Themes/theme";
import RequestScreen from "../ChildScreens/RequestScreen";
import AdServiceScreen from "./AdServiceScreen";

const BottomTab = createBottomTabNavigator()

const RootHomeScreen = props => {
    return (
        <BottomTab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
            tabBarHideOnKeyboard: true
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
            <BottomTab.Screen options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={styles.tabBarBtnContainer}>
                            <Ionicons color={focused ? COLORS.primary : COLORS.black}
                                      name={focused ? "megaphone" : "megaphone-outline"} size={20}/>
                            <Text style={{color: focused ? COLORS.primary : COLORS.black,...FONTS.body5}}>Ad Service</Text>
                        </View>
                    )
                }
            }} name="AdServiceScreen" component={AdServiceScreen}/>
        </BottomTab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        height: '7%',
    },
    tabBarBtnContainer: {
        justifyContent: "center",
        alignItems: "center"
    }
})

export default RootHomeScreen
