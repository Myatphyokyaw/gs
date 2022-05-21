import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RootHomeScreen from "../Screens/RootScreens/RootHomeScreen";
import AboutScreen from "../Screens/RootScreens/AboutScreen";

const Stack = createNativeStackNavigator()

const AppStack = props => {
    return(
       <Stack.Navigator screenOptions={{
           headerShown : false
       }}>
               <Stack.Screen name="RootHomeScreen" component={RootHomeScreen}/>
               <Stack.Screen name="AboutScreen"  component={AboutScreen}/>
       </Stack.Navigator>
    )
}

export default AppStack
