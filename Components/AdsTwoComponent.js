import React, {useContext, useEffect, useState} from "react";
import {Text, View, StyleSheet, Image, ActivityIndicator, TouchableOpacity, Linking, ToastAndroid} from "react-native";
import {COLORS, FONTS, SIZES} from "../Themes/theme";
import Carousel from 'react-native-snap-carousel';
import {Context} from "../Navigations/Provider";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const AdsTwoComponent = props => {
    const {getAds, adsTwoData, setAdsTwoData} = useContext(Context)
    const [loading, setLoading] = useState(true)
    const [imageLoad,setImageLoad] = useState(true)
    useEffect(() => {
       getData().then(()=>{

       })
    }, [])


    const getData = async () => {
        await setAdsTwoData([])
        await getAds()
        await setLoading(false)
    }

    const handleClick = async (link) => {
        if (link) {
            await Linking.openURL(link)
        } else {
            ToastAndroid.show("Empty Website", 10)
        }
    }

    return (
        <View style={{paddingVertical: SIZES.padding * 2, width: '100%'}}>
            <Text style={{
                marginBottom: SIZES.padding, ...FONTS.body4,
                color: COLORS.secondary,
                marginStart: SIZES.padding
            }}>Advertising</Text>
            {
                loading ? (
                    <View style={{height: 150,justifyContent:"center", width: SIZES.width}}>
                        <ActivityIndicator color={COLORS.primary} size={40}/>
                    </View>
                ) : (
                    <Carousel sliderWidth={SIZES.width}
                              sliderHeight={400}
                              autoplay={true}
                              autoplayInterval={2500}
                              loop={true}
                              loopClonesPerSide={adsTwoData.length}
                              itemWidth={SIZES.width / 1.2} data={adsTwoData} renderItem={({item, index}) => {
                        return (
                                <TouchableOpacity onPress={() => handleClick(item.link)}>
                                    {imageLoad && (
                                        <SkeletonPlaceholder>
                                            <View style={{height:150,width:"100%",borderRadius:SIZES.radius}}></View>
                                        </SkeletonPlaceholder>
                                    )}
                                    <Image onLoadEnd={()=>setImageLoad(false)} style={[styles.adsImage,{display : imageLoad ? "none" : "flex"}]}
                                           source={{uri: item.photo}}/>
                                </TouchableOpacity>

                        )
                    }}/>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    adsImage: {
        width: '100%',
        height: 150,
        resizeMode: "cover",
        borderRadius: SIZES.radius,
    }
})


export default AdsTwoComponent
