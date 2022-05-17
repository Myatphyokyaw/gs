import React, {useContext, useEffect, useState} from "react";
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    FlatList
} from "react-native";
import {COLORS, FONTS, SIZES} from "../../Themes/theme";
import HeaderBarComponent from "../../Components/HeaderBarComponent";
import {Context} from "../../Navigations/Provider";
import LottieView from 'lottie-react-native';
import SkeletonListItemComponent from "../../Components/SkeletonListItemComponent";
import SkeletonCategoryComponent from "../../Components/SkeletonCategoryComponent";

const GameScreen = props => {
    const {
        category,
        getAllData,
        getFilterData,
        data,
        loading,
        categoryLoad,
        setPage,
        page,
        more,
        setMore
    } = useContext(Context);
    const [selected, setSelected] = useState(null);
    const [all, setAll] = useState(true)
    useEffect(() => {
        getAllData()
    }, [page])

    const selectCategory = (id, selectID) => {
        setSelected(id)
        setAll(false)
        getFilterData(selectID)
    }

    const selectAll = async () => {
        await setAll(true)
        await setSelected(null)
        await setPage(1)
        await getAllData()
    }

    const loadMore = async () => {
        if (more) {
            setPage(page + 1)
        } else {

        }
        console.log(page)
    }

    return (
        <>
            {loading ? (
                <View style={styles.loadingContainer}>
                    <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white}/>
                    <HeaderBarComponent title="Games"/>
                    <View style={{padding: SIZES.padding}}>
                        <Text style={styles.categoryText}>Categories</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal
                                    style={{marginVertical: SIZES.padding}}>
                            <SkeletonCategoryComponent/>
                            <SkeletonCategoryComponent/>
                            <SkeletonCategoryComponent/>
                            <SkeletonCategoryComponent/>
                            <SkeletonCategoryComponent/>
                            <SkeletonCategoryComponent/>
                            <SkeletonCategoryComponent/>
                        </ScrollView>
                    </View>
                    <SkeletonListItemComponent/>
                    <SkeletonListItemComponent/>
                    <SkeletonListItemComponent/>
                    <SkeletonListItemComponent/>
                    <SkeletonListItemComponent/>
                    <SkeletonListItemComponent/>
                </View>
            ) : (
                <View style={styles.container}>
                    <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"}/>
                    <HeaderBarComponent title="Games"/>
                    <View style={{padding: SIZES.padding}}>
                        <Text style={styles.categoryText}>Categories</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal
                                    style={{marginVertical: SIZES.padding}}>
                            <TouchableOpacity onPress={() => selectAll()}
                                              style={[styles.categoryBtn, {backgroundColor: all ? COLORS.primary : COLORS.white}]}>
                                <Text style={[{color: all ? COLORS.white : COLORS.primary}]}>ALL</Text>
                            </TouchableOpacity>
                            {category.map((el, index) => {
                                return (
                                    <TouchableOpacity onPress={() => selectCategory(index, el.id)}
                                                      key={index.toString()}
                                                      style={[styles.categoryBtn, {backgroundColor: (selected === index) ? COLORS.primary : COLORS.white}]}>
                                        <Text
                                            style={[{color: (selected === index) ? COLORS.white : COLORS.primary}]}>{el.title}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                    {
                        categoryLoad ? (
                            <>
                                <SkeletonListItemComponent/>
                                <SkeletonListItemComponent/>
                                <SkeletonListItemComponent/>
                                <SkeletonListItemComponent/>
                            </>
                        ) : (
                            (data.length === 0) ? (
                                <View style={{flex: 0.8, justifyContent: "center", alignItems: "center"}}>
                                    <LottieView style={{height: 200, width: 200}} autoPlay loop
                                                source={require("../../Graphics/Lotties/nothing.json")}/>
                                    <Text style={{...FONTS.h4, color: COLORS.primary}}>Nothing to show data</Text>
                                </View>
                            ) : (
                                <FlatList data={data} keyExtractor={(item, index) => index.toString()}
                                          onEndReachedThreshold={0.5}
                                          onEndReached={loadMore}
                                          ListFooterComponent={more ? (
                                              <ActivityIndicator style={{marginBottom: 20, marginTop: 5}}
                                                                 color={COLORS.primary} size={30}/>) : null}
                                          renderItem={({item, index}) => {
                                              return (
                                                  <TouchableOpacity activeOpacity={.3} style={styles.gameListContainer}>
                                                      <View style={styles.listItem}>
                                                          <Image
                                                              style={styles.logoImage}
                                                              source={{uri: "http://192.168.1.52/ahc_Project/frame-master/frame-master/project/public/storage/thumbnail/" + item.logo}}/>
                                                          <View style={styles.rightContainer}>
                                                              <Text style={styles.gameName}>{item.name}</Text>
                                                              <Text style={styles.gameVersion}>v{item.version} ,
                                                                  size {item.size}</Text>
                                                              <View style={styles.badgeContainer}>
                                                                  <View style={styles.categoryBadge}>
                                                                      <Text
                                                                          style={styles.categoryName}>{item.category_title}</Text>
                                                                  </View>
                                                                  <View style={styles.statusBadge}>
                                                                      <Text style={styles.categoryName}>Offline</Text>
                                                                  </View>
                                                              </View>
                                                          </View>
                                                      </View>
                                                  </TouchableOpacity>
                                              )
                                          }}/>
                            )
                        )

                    }
                </View>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    categoryText: {
        ...FONTS.h4,
        color: COLORS.black,
        marginTop: SIZES.padding
    },
    categoryBtn: {
        width: 100,
        height: 35,
        borderRadius: SIZES.roundRadius,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginVertical: SIZES.padding,
        marginEnd: SIZES.padding,
        marginStart: 0.5
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    gameListContainer: {
        padding: SIZES.padding,
    },
    listItem: {
        flexDirection: "row"
    },
    logoImage: {
        width: 80,
        height: 80,
        borderRadius: SIZES.radius * 3
    },
    rightContainer: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding - 5,
        justifyContent: "space-between"
    },
    gameName: {
        ...FONTS.body4,
        color: COLORS.black
    },
    gameVersion: {
        ...FONTS.body5,
        color: COLORS.secondary
    },
    categoryBadge: {
        width: 70,
        height: 18,
        borderRadius: SIZES.roundRadius,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        marginEnd: SIZES.padding
    },
    categoryName: {
        color: COLORS.white,
        ...FONTS.body6,
    },
    badgeContainer: {
        flexDirection: "row"
    },
    statusBadge: {
        width: 70,
        height: 18,
        borderRadius: SIZES.roundRadius,
        backgroundColor: COLORS.secondary,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default GameScreen
