import React, {useContext, useEffect, useState} from "react";
import {View, StyleSheet, Text, TextInput, StatusBar, Pressable, ScrollView, FlatList} from "react-native";
import {COLORS, FONTS, SIZES} from "../../Themes/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Voice from '@react-native-community/voice';
import Feather from "react-native-vector-icons/Feather";
import axios from "axios";
import {Context} from "../../Navigations/Provider";

const SearchScreen = props => {

    const [searchText, setSearchText] = useState("")
    const [allGame, setAllGame] = useState([])
    const [gameFilter, setGameFilter] = useState([])
    const {setNetWorkModal} = useContext(Context)
    const [start, setStart] = useState(true)
    const [empty, setEmpty] = useState(false)
    useEffect(() => {
        setStart(true)
        setEmpty(false)
        let config = {
            method: 'get',
            url: `http://game.mgbogyi.com/api/v1/games`,
            headers: {"x-hardik": "123456"},
        };
        axios(config)
            .then(async function (response) {
                let responseData = response.data[0];
                await setAllGame(responseData)
            })
            .catch(function (error) {
                console.log(error.message);
                if (error.message === "Network Error") {
                    setNetWorkModal(true)
                }
            });
        Voice.onSpeechStart = onSpeechStartHandler;
        Voice.onSpeechEnd = onSpeechEndHandler;
        Voice.onSpeechResults = onSpeechResultsHandler;
        Voice.getSpeechRecognitionServices()
        return () => {
            Voice.destroy().then(Voice.removeAllListeners)
            setAllGame([])
            setGameFilter([])
        }
    }, [])


    const onSpeechStartHandler = (e) => {
        console.log("Start Handler=>", e)
        console.log("hello start")
    }

    const onSpeechEndHandler = (e) => {
        console.log("Stop Handler=>", e)
    }

    const onSpeechResultsHandler = (e) => {
        console.log("Speech Result Handler", e)
    }

    const startRecording = async () => {
        try {
            await Voice.start('en-US');
            console.log("start")
        } catch (e) {
            console.log("Error Raised", e)
        }
    }

    const searchGame = (text) => {
        if (text !== "") {
            setGameFilter(allGame.filter((el) => {
                return el.name.toLowerCase().trim().replace(/\s/g, '').match(text.toLowerCase().trim().replace(/\s/g, ''))
            }))
            setStart(true)
            setEmpty(false)
        } else {
            setStart(false)
            setEmpty(true)
            setGameFilter([])
        }
        console.log(text)

    }

    const stopRecording = async () => {
        try {
            await Voice.stop()
        } catch (e) {
            console.log("Error Raised", e)
        }
    }

    return (
        <View style={{flex: 1}}>
            <View style={styles.searchFieldContainer}>
                <View style={styles.searchBox}>
                    <View style={styles.firstContainer}>
                        <Ionicons color={COLORS.secondary} size={20} name="md-search-outline"/>
                    </View>
                    <TextInput onChangeText={(text) => searchGame(text)} placeholderTextColor={COLORS.secondary}
                               placeholder="Search MOD Games" style={styles.searchFiled}/>
                    <Pressable android_ripple={{color: COLORS.lightGray3, borderless: true}}
                               style={styles.secondContainer}
                               onPress={startRecording}>
                        <MaterialCommunityIcons color={COLORS.secondary} size={25} name="microphone-outline"/>
                    </Pressable>
                </View>
            </View>
            <View showsVerticalScrollIndicator={false} style={styles.subContainer}>
                <FlatList keyExtractor={(item, index) => index.toString()} data={gameFilter}
                          renderItem={({item, index}) => {
                              return (
                                  <Pressable onPress={() => {
                                      props.navigation.navigate("GamesDetailScreen", item)
                                  }} android_ripple={{color: COLORS.lightGray3}} style={styles.listItem}>
                                      <Text numberOfLines={1} ellipsizeMode={"tail"}
                                            style={styles.resultText}>{item.name}</Text>
                                      <Pressable android_ripple={{color: COLORS.lightGray3}}>
                                          <Feather color={COLORS.black} size={20} name="arrow-up-right"/>
                                      </Pressable>
                                  </Pressable>
                              )
                          }}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    searchFieldContainer: {
        backgroundColor: COLORS.white,
        height: SIZES.height / 9,
        width: '100%',
        alignItems: "center",
        paddingVertical: SIZES.padding * 2,
    },
    searchBox: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    firstContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.lightGray3,
        height: 45,
        paddingVertical: SIZES.padding,
        paddingStart: SIZES.padding * 2,
        paddingEnd: SIZES.padding,
        borderTopLeftRadius: SIZES.roundRadius,
        borderBottomLeftRadius: SIZES.roundRadius
    },
    searchFiled: {
        height: 45,
        backgroundColor: COLORS.lightGray3,
        width: "65%",
        ...FONTS.body4,

    },
    subContainer: {
        backgroundColor: COLORS.white,
        flex: 1,
        width: '100%',
        borderTopLeftRadius: SIZES.radius * 2,
        borderTopRightRadius: SIZES.radius * 2
    },
    secondContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.lightGray3,
        height: 45,
        paddingVertical: SIZES.padding,
        paddingEnd: SIZES.padding * 2,
        borderTopRightRadius: SIZES.roundRadius,
        borderBottomRightRadius: SIZES.roundRadius
    },
    listItem: {
        paddingHorizontal: SIZES.padding * 3,
        backgroundColor: COLORS.white,
        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.lightGray3
    },
    resultText: {
        ...FONTS.body3,
        color: COLORS.black,
        width: '80%'
    }
})

export default SearchScreen
