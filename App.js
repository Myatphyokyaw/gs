import React, {useEffect} from "react";
import Routes from "./Navigations/Routes";
import inAppMessaging from '@react-native-firebase/in-app-messaging';
import SplashScreen from "react-native-splash-screen";
import NetWorkErrorModalComponent from "./Components/NetWorkErrorModalComponent";



const App = props => {

    async function onSetup() {
        await inAppMessaging().setMessagesDisplaySuppressed(false);
    }

    useEffect(() => {
        onSetup().then(() => {
            console.log("Success")
        })
        SplashScreen.hide();
    }, [])

    return (

        <Routes/>

    )
}

export default App
