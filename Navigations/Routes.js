import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import AppStack from "../NavigationStacks/AppStack";
import {Provider} from "./Provider";

const Routes = props => {
    return(
        <Provider>
            <NavigationContainer>
                <AppStack/>
            </NavigationContainer>
        </Provider>
    )
}

export default Routes
