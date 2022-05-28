import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RootHomeScreen from "../Screens/RootScreens/RootHomeScreen";
import AboutScreen from "../Screens/RootScreens/AboutScreen";
import GamesDetailScreen from "../Screens/RootScreens/GamesDetailScreen";
import SearchScreen from "../Screens/RootScreens/SearchScreen";
import NetWorkErrorModalComponent from "../Components/NetWorkErrorModalComponent";

const Stack = createNativeStackNavigator()

const AppStack = props => {
    return(
            <Stack.Navigator screenOptions={{
                headerShown : false,
            }}>
                <Stack.Screen name="RootHomeScreen" component={RootHomeScreen}/>
                <Stack.Screen options={{
                    animation:"fade_from_bottom"
                }} name="AboutScreen"  component={AboutScreen}/>
                <Stack.Screen options={{
                    animation: "slide_from_bottom"
                }}  name="GamesDetailScreen"  component={GamesDetailScreen}/>
                <Stack.Screen options={{
                    animation: "fade_from_bottom"
                }}  name="SearchScreen"  component={SearchScreen}/>
            </Stack.Navigator>
    )
}

export default AppStack
