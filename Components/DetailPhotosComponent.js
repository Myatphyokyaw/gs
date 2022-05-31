import React, {useContext, useEffect, useState} from "react";
import {View, StyleSheet, Text, Image, FlatList, TouchableOpacity, ScrollView, Pressable} from "react-native";
import DetailSectionCard from "./DetailSectionCard";
import {COLORS, FONTS, SIZES} from "../Themes/theme";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import {Context} from "../Navigations/Provider";

const DetailPhotosComponent = props => {
    const [loading, setLoading] = useState(true);
    const {modalVisible, setModalVisible, setImgUrl, setFullImgList, setIndex} = useContext(Context)

    const tabImage = (url, index) => {
        setModalVisible(true)
        setImgUrl(url)
        setFullImgList(props.fullImg)
        setIndex(index)
    }

    useEffect(() => {
        console.log(props.demoImg)
    }, [])

    return (
        <DetailSectionCard>
            <Text style={styles.header}>GamePlay Photos</Text>
            <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={props.demoImg}
                      renderItem={({item, index}) => {
                          return (
                              <>
                                  {loading && (
                                      <SkeletonPlaceholder>
                                          <View style={[styles.image, styles.imageContainer]}></View>
                                      </SkeletonPlaceholder>
                                  )}
                                  <TouchableOpacity style={styles.imageContainer}
                                                    onPress={() => tabImage(props.fullImg[index], index)}
                                                    activeOpacity={.7}>
                                      <Image onLoadEnd={() => setLoading(false)}
                                             style={loading ? styles.emptyImg : styles.image}
                                             source={{uri: `${item}`}}/>
                                  </TouchableOpacity>
                              </>
                          )
                      }}/>
        </DetailSectionCard>
    )
}

const styles = StyleSheet.create({
    header: {
        ...FONTS.body3,
        color: COLORS.black,
        marginBottom: SIZES.padding
    },
    imageContainer: {
        marginEnd: SIZES.padding
    },
    image: {
        width: 250,
        height: 150,
        resizeMode: "cover",
        borderRadius: SIZES.radius
    },
    emptyImg: {
        display: "none",
    }
})

export default DetailPhotosComponent
