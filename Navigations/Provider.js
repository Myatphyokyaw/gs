import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const Context = createContext();
import {openDatabase} from "react-native-sqlite-storage"

const db = openDatabase(
    {
        name: "MainDB",
        location: "default"
    },
    () => {

    },
    error => {
        console.log(error)
    }
)
export const Provider = ({children}) => {

    useEffect(() => {
        createTable()
        console.log("hello")
    }, [])

    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS `
                + "NOTIFICATION"
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, TITLE TEXT, DESC TEXT,TIME TEXT)",
                [],
                (sqlTX, res) => {
                    console.log("Table created successfully")
                },
                error => {
                    console.log("error creating on table" + error.message)
                }
            )
        })
    }

    const [category, setCategory] = useState([]);
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [categoryLoad, setCategoryLoad] = useState(null)
    const [page, setPage] = useState(2)
    const [more, setMore] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);
    const [imgUrl, setImgUrl] = useState("")
    const [fullImgList, setFullImgList] = useState([])
    const [index, setIndex] = useState(null)
    const [networkModal, setNetWorkModal] = useState(false)
    const [requestGameData, setRequestGameData] = useState(null)
    const [adsOneData, setAdsOneData] = useState([])
    const [adsTwoData, setAdsTwoData] = useState([])
    const [notificationData, setNotificationData] = useState([])
    const [notiLoad, setNotiLoad] = useState(true)
    const [emptyNoti, setEmptyNoti] = useState(false)
    const [downloading, setDownloading] = useState(false)
    const arr = []
    return (
        <Context.Provider value={{
            category,
            data,
            loading,
            setLoading,
            categoryLoad,
            setCategoryLoad,
            setPage,
            page,
            more,
            setMore,
            modalVisible,
            setModalVisible,
            imgUrl,
            setImgUrl,
            fullImgList,
            setFullImgList,
            index,
            setIndex,
            networkModal,
            setNetWorkModal,
            requestGameData,
            setRequestGameData,
            adsOneData,
            setAdsOneData,
            adsTwoData,
            setAdsTwoData,
            notiLoad,
            setNotiLoad,
            notificationData,
            emptyNoti,
            setEmptyNoti,
            downloading,
            setDownloading,
            getAllData: async () => {
                setLoading(true)
                setMore(true)
                setPage(2)
                let config = {
                    method: 'get',
                    url: `http://game.mgbogyi.com/api/v1/game`,
                    headers: {"x-hardik": "123456"},
                };
                axios(config)
                    .then(async function (response) {
                        let responseData = await response.data;
                        await setData(responseData[0].data);
                        await responseData[1].map(async (el) => {
                            arr.push(el);
                        });
                        let newCategory = ([...new Set(arr)]);
                        setCategory(newCategory)
                        setLoading(false)
                    })
                    .catch(function (error) {
                        console.log(error.message);
                        console.log("1")
                        if (error.message === "Network Error") {
                            setNetWorkModal(true)
                        }
                    });
            },
            getPageData: async () => {
                setLoading(false)
                let config = {
                    method: 'get',
                    url: `http://game.mgbogyi.com/api/v1/game?page=${page}`,
                    headers: {"x-hardik": "123456"},
                };
                console.log(page)
                axios(config)
                    .then(async function (response) {
                        let responseData = await response.data;
                        if (responseData[0].current_page > responseData[0].last_page) {
                            setMore(false)
                        } else {
                            setMore(true)
                        }
                        await setData(data.concat(responseData[0].data));
                    })
                    .catch(function (error) {
                        console.log(error.message);
                        console.log("2")
                        if (error.message === "Network Error") {
                            setNetWorkModal(true)
                        }
                    });
            },
            getFilterByCategory: async (categoryID) => {
                setCategoryLoad(true)
                setMore(true)
                setPage(2)
                let config = {
                    method: 'get',
                    url: `http://game.mgbogyi.com/api/v1/game/${categoryID}`,
                    headers: {"x-hardik": "123456"},
                };
                axios(config)
                    .then(async function (response) {
                        let responseData = response.data.data;
                        await setData(responseData);
                        setCategoryLoad(false)
                    })
                    .catch(function (error) {
                        console.log(error.message);
                        console.log("3")

                        if (error.message === "Network Error") {
                            setNetWorkModal(true)
                        }
                    });
            },
            getPageFilterByCategory: async (categoryID) => {
                setLoading(false)
                setCategoryLoad(false)
                let config = {
                    method: 'get',
                    url: `http://game.mgbogyi.com/api/v1/game/${categoryID}?page=${page}`,
                    headers: {"x-hardik": "123456"},
                };
                axios(config)
                    .then(async function (response) {
                        let responseData = response.data;
                        console.log(`current_page ${responseData.current_page}`)
                        console.log(`last_page ${responseData.last_page}`)
                        if (responseData.current_page > responseData.last_page) {
                            setMore(false)
                        } else {
                            setMore(true)
                        }
                        console.log("Hello")
                        console.log(responseData)
                        await setData(data.concat(responseData.data));
                        console.log("Finish")
                        setCategoryLoad(false)
                    })
                    .catch(function (error) {
                        console.log(error.message);
                        console.log("4")

                        if (error.message === "Network Error") {
                            setNetWorkModal(true)
                        }
                    });
            },
            getAds: async () => {
                let config = {
                    method: 'get',
                    url: 'http://game.mgbogyi.com/api/v1/ads',
                    headers: {'x-hardik': '123456'}
                };
                axios(config)
                    .then(async function (response) {
                        let data = response.data
                        await setAdsOneData(data.filter(el => el.type === "1"))
                        await setAdsTwoData(data.filter(el => el.type === "2"))
                        console.log(adsTwoData)
                    })
                    .catch(function (error) {
                        console.log(error);
                        console.log("5")
                    });
            },
            setNoti: async (title, desc, time) => {
                if (title, desc, time) {
                    try {
                        await db.transaction(async (tx) => {
                            tx.executeSql(
                                `INSERT INTO NOTIFICATION (TITLE,DESC,TIME) VALUES (?,?,?)`,
                                [title, desc, time],
                                (tx, res) => {
                                    console.log("Insert successfully")
                                },
                                error => {
                                    console.log("Error setting noti" + error.message)
                                }
                            )
                        })
                    } catch (e) {
                        console.log(e)
                    }
                } else {
                    console.log("Something went wrong")
                }

            },
            getNoti: async () => {
                try {
                    setNotiLoad(true)
                    setEmptyNoti(false)
                    db.transaction((tx) => {
                        tx.executeSql(
                            `SELECT * FROM NOTIFICATION ORDER BY id DESC`,
                            [],
                            async (tx, results) => {
                                let len = results.rows.length;
                                if (len > 0) {
                                    let result = [];
                                    for (let i = 0; i < len; i++) {
                                        let item = results.rows.item(i)
                                        result.push({title: item.TITLE, desc: item.DESC, time: item.TIME})
                                    }
                                    await setNotificationData(result)
                                    await setNotiLoad(false)
                                } else {
                                    setNotiLoad(false)
                                    await setEmptyNoti(true)
                                }
                            },
                            error => console.log("Error on getNoti", error.message)
                        )
                    })
                } catch (e) {
                    console.log(e)
                }
            }
        }}>
            {children}
        </Context.Provider>
    )
}
