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
    FlatList, Pressable
} from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import {COLORS, FONTS, SIZES} from "../../Themes/theme";
import HeaderBarComponent from "../../Components/HeaderBarComponent";
import {Context} from "../../Navigations/Provider";
import LottieView from 'lottie-react-native';
import SkeletonListItemComponent from "../../Components/SkeletonListItemComponent";
import SkeletonCategoryComponent from "../../Components/SkeletonCategoryComponent";
import NetWorkErrorModalComponent from "../../Components/NetWorkErrorModalComponent";
import AdsTwoComponent from "../../Components/AdsTwoComponent";
import PopularGameComponent from "../../Components/PopularGameComponent";
import {LogBox} from "react-native";

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
        getPageData,
        getFilterByCategory,
        getPageFilterByCategory
    } = useContext(Context);
    const [selected, setSelected] = useState(null);
    const [all, setAll] = useState(true)
    const [categoryRole, setCategoryRole] = useState(false)
    const [categoryId, setCategoryId] = useState(null)
    const [imageLoad, setImageLoad] = useState(true)
    useEffect(() => {
        getAllData()
    }, [])
    LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types"])
    const selectCategory = (id, selectID) => {
        setSelected(id)
        setAll(false)
        getFilterByCategory(selectID)
        setCategoryRole(true)
        setCategoryId(selectID)
    }

    const selectAll = async () => {
        await setAll(true)
        await setSelected(null)
        await setPage(1)
        await getAllData()
        await setCategoryRole(false)
    }
    const loadMore = async () => {
        if (more) {
            if (categoryRole) {
                await setPage(page + 1)
                console.log(categoryId)
                getPageFilterByCategory(categoryId)
            } else {
                await setPage(page + 1)
                getPageData()
            }
        } else {
            console.log("No More")
        }
    }

    const goDetail = (item) => {
        props.navigation.navigate("GamesDetailScreen", item)
    }

    return (
        <>
            <NetWorkErrorModalComponent/>
            {loading ? (
                <View style={styles.loadingContainer}>
                    <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white}/>
                    <HeaderBarComponent title="Games"/>
                    <View style={{padding: SIZES.padding}}>
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
                    <View style={{paddingHorizontal: SIZES.padding}}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal
                                    style={{marginVertical: SIZES.padding}}>

                            <TouchableOpacity onPress={() => selectAll()}
                                              style={[styles.categoryBtn, {backgroundColor: all ? COLORS.primary : COLORS.white}]}>
                                <Text style={[{color: all ? COLORS.white : COLORS.secondary}]}>ALL</Text>
                            </TouchableOpacity>
                            {category.map((el, index) => {
                                return (
                                    <TouchableOpacity onPress={() => selectCategory(index, el.id)}
                                                      key={index.toString()}
                                                      style={[styles.categoryBtn, {backgroundColor: (selected === index) ? COLORS.primary : COLORS.white}]}>
                                        <Text
                                            style={[{color: (selected === index) ? COLORS.white : COLORS.secondary}]}>{el.title}</Text>
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
                                <FlatList data={data}
                                          onScroll={() => props.navigation.setParams({tabBarVisible: false})}
                                          keyExtractor={(item, index) => index.toString()}
                                          showsVerticalScrollIndicator={false}
                                          stickyHeaderIndices={[0]}
                                          ListHeaderComponent={() => {
                                              return null
                                          }}
                                          onEndReachedThreshold={0.5}
                                          onEndReached={loadMore}
                                          ListFooterComponent={more ? (
                                                  <View style={styles.listBottomContainer}>
                                                      <ActivityIndicator color={COLORS.primary} size={30}/>
                                                  </View>
                                              ) :
                                              <View style={styles.listBottomContainer}>
                                                  <Text style={{...FONTS.body4, color: COLORS.secondary}}>No More Data</Text>
                                              </View>
                                          }
                                          renderItem={({item, index}) => {
                                              if (index === 4) {
                                                  return (
                                                      <PopularGameComponent
                                                          item={data.filter(el => el.category_id === "8")}/>
                                                  )
                                              } else if (index === 7) {
                                                  return (
                                                      <>
                                                          <AdsTwoComponent/>
                                                          <Pressable android_ripple={{color: COLORS.darkgray}}
                                                                     onPress={() => goDetail(item)} activeOpacity={.3}
                                                                     style={styles.gameListContainer}>
                                                              <View style={styles.listItem}>
                                                                  <Image
                                                                      style={styles.logoImage}
                                                                      source={{uri: item.logo}}/>
                                                                  <View style={styles.rightContainer}>
                                                                      <Text
                                                                          ellipsizeMode="tail"
                                                                          numberOfLines={1}
                                                                          style={styles.gameName}>{item.name}</Text>
                                                                      <Text ellipsizeMode="tail"
                                                                            numberOfLines={1}
                                                                            style={styles.gameVersion}>v{item.version} ,
                                                                          size{item.size}</Text>
                                                                      <View style={styles.badgeContainer}>
                                                                          <View style={styles.categoryBadge}>
                                                                              <Text
                                                                                  style={styles.categoryName}>{item.get_category.title}</Text>
                                                                          </View>
                                                                          <View
                                                                              style={(item.type.toLowerCase().trim().split('')[1] === 'f') ? styles.offlineBadge : styles.onlineBadge}>
                                                                              <Text style={styles.categoryName}>{
                                                                                  (item.type.toLowerCase().trim().split('')[1] === 'f') ? "Offline" : "Online"
                                                                              }</Text>
                                                                          </View>
                                                                      </View>
                                                                  </View>
                                                              </View>
                                                          </Pressable>
                                                      </>
                                                  )
                                              } else {
                                                  return (
                                                      <Pressable android_ripple={{color: COLORS.darkgray}}
                                                                 onPress={() => goDetail(item)} activeOpacity={.3}
                                                                 style={styles.gameListContainer}>
                                                          <View style={styles.listItem}>
                                                              {imageLoad && (
                                                                  <SkeletonPlaceholder>
                                                                      <View style={styles.logoImage}></View>
                                                                  </SkeletonPlaceholder>
                                                              )}
                                                              <Image
                                                                  onLoadEnd={() => setImageLoad(false)}
                                                                  style={[styles.logoImage, {display: imageLoad ? 'none' : "flex"}]}
                                                                  source={{uri: item.logo}}/>
                                                              <View style={styles.rightContainer}>
                                                                  <Text
                                                                      ellipsizeMode="tail"
                                                                      numberOfLines={1}
                                                                      style={styles.gameName}>{item.name}</Text>
                                                                  <Text ellipsizeMode="tail"
                                                                        numberOfLines={1}
                                                                        style={styles.gameVersion}>v{item.version} ,
                                                                      size{item.size}</Text>
                                                                  <View style={styles.badgeContainer}>
                                                                      <View style={styles.categoryBadge}>
                                                                          <Text
                                                                              style={styles.categoryName}>{item.get_category.title}</Text>
                                                                      </View>
                                                                      <View
                                                                          style={(item.type.toLowerCase().trim().split('')[1] === 'f') ? styles.offlineBadge : styles.onlineBadge}>
                                                                          <Text style={styles.categoryName}>{
                                                                              (item.type.toLowerCase().trim().split('')[1] === 'f') ? "Offline" : "Online"
                                                                          }</Text>
                                                                      </View>
                                                                  </View>
                                                              </View>
                                                          </View>
                                                      </Pressable>
                                                  )
                                              }

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
        backgroundColor: COLORS.white,
    },
    categoryText: {
        ...FONTS.body3,
        color: COLORS.black,
        marginStart: SIZES.padding,
        marginTop: SIZES.padding * 2
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
        marginBottom: SIZES.padding - 6,
        marginTop: SIZES.padding - 4,
        marginEnd: SIZES.padding,
        marginStart: 0.5
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    gameListContainer: {
        paddingVertical: SIZES.padding * 1.5,
        paddingHorizontal: SIZES.padding,
        borderBottomWidth: 0.2,
        borderColor: COLORS.lightGray2
    },
    listItem: {
        flexDirection: "row"
    },
    logoImage: {
        width: 70,
        height: 70,
        borderRadius: SIZES.radius
    },
    rightContainer: {
        paddingHorizontal: SIZES.padding,
        justifyContent: "space-between",
        width: '100%'
    },
    gameName: {
        ...FONTS.body4,
        width: '70%',
        color: COLORS.black
    },
    gameVersion: {
        ...FONTS.body5,
        width: '60%',
        color: COLORS.secondary,
        marginBottom: 3,
    },
    categoryBadge: {
        height: 18,
        borderRadius: SIZES.roundRadius,
        backgroundColor: COLORS.yellow,
        paddingHorizontal: SIZES.padding * 1.4,
        justifyContent: "center",
        alignItems: "center",
        marginEnd: SIZES.padding,
    },
    categoryName: {
        color: COLORS.white,
        ...FONTS.body6,
    },
    badgeContainer: {
        flexDirection: "row"
    },
    offlineBadge: {
        width: 70,
        height: 18,
        borderRadius: SIZES.roundRadius,
        backgroundColor: COLORS.darkgray,
        justifyContent: "center",
        alignItems: "center",
    },
    onlineBadge: {
        width: 70,
        height: 18,
        borderRadius: SIZES.roundRadius,
        backgroundColor: COLORS.success,
        justifyContent: "center",
        alignItems: "center",
    },
    customAdsContainer: {
        height: 100,
        backgroundColor: COLORS.white,
        padding: SIZES.padding
    },
    customAd: {
        borderWidth: 0.3,
        borderRadius: SIZES.radius,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        height: '100%',
    },
    listBottomContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: SIZES.padding,
        width: '100%',
        backgroundColor: COLORS.white,
        marginBottom: SIZES.padding
    }
})

export default GameScreen
