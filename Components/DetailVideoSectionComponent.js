import React, {useState} from "react";
import {View, StyleSheet, Text, ActivityIndicator} from "react-native";
import DetailSectionCard from "./DetailSectionCard";
import {COLORS, FONTS, SIZES} from "../Themes/theme";
import YoutubePlayer from "react-native-youtube-iframe";

const DetailVideoSectionComponent = props => {
    const [loading, setLoading] = useState(true)

    const onLoadEnd = () => {

    }

    return (
        <DetailSectionCard>
            <Text style={styles.header}>GamePlay Video</Text>
            {
                loading && (
                    <View style={{height:200,justifyContent:"center",alignItems:"center"}}>
                        <ActivityIndicator size={40} color={COLORS.primary}/>
                    </View>
                )
            }
            <YoutubePlayer
                onReady={() => setLoading(false)}
                webViewStyle={{opacity: 0.99, height: 100, borderRadius: SIZES.radius}}
                height={loading ? 0 : 200}
                play={false}
                videoId={"Q3kwxakRoJA"}
            />
        </DetailSectionCard>
    )
}

const styles = StyleSheet.create({
    header: {
        ...FONTS.body3,
        color: COLORS.black,
        marginBottom: SIZES.padding
    }
})

export default DetailVideoSectionComponent
