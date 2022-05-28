import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const Context = createContext();

export const Provider = ({children}) => {
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
            getAllData: async () => {
                setLoading(true)
                setMore(true)
                setPage(2)
                let config = {
                    method: 'get',
                    url: `http://192.168.1.28/project/public/api/v1/game`,
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
                        if (error.message === "Network Error") {
                            setNetWorkModal(true)
                        }
                    });
            },
            getPageData: async () => {
                setLoading(false)
                let config = {
                    method: 'get',
                    url: `http://192.168.1.28/project/public/api/v1/game?page=${page}`,
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
                    url: `http://192.168.1.28/project/public/api/v1/game/${categoryID}`,
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
                    url: `http://192.168.1.28/project/public/api/v1/game/${categoryID}?page=${page}`,
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
                        if (error.message === "Network Error") {
                            setNetWorkModal(true)
                        }
                    });
            },

        }}>
            {children}
        </Context.Provider>
    )
}
