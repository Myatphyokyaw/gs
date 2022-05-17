import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const Context = createContext();

export const Provider = ({children}) => {
    const [category, setCategory] = useState([]);
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(null);
    const [categoryLoad, setCategoryLoad] = useState(null)
    const [page, setPage] = useState(1)
    const [more, setMore] = useState(true)
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
            getAllData: async () => {
                if(page > 1){
                    setLoading(false)
                }else {
                    setLoading(true)
                }
                let config = {
                    method: 'get',
                    url: `http://192.168.1.52/ahc_Project/frame-master/frame-master/project/public/api/game?page=${page}`,
                    headers: {},
                };
                axios(config)
                    .then(async function (response) {
                        let responseData = await response.data;
                        if(page === 1){
                            await setData(responseData[0].data);
                        }else {
                            if(responseData[0].data.length === 0){
                                setMore(false)
                            }
                            await setData(data.concat(responseData[0].data));
                        }

                        await responseData[1].map(async (el) => {
                            arr.push(el);
                        });
                        let newCategory = ([...new Set(arr)]);
                        setCategory(newCategory)
                        setLoading(false)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            getFilterData: async (categoryID) => {
                setCategoryLoad(true)
                let config = {
                    method: 'get',
                    url: `http://192.168.1.52/ahc_Project/frame-master/frame-master/project/public/api/game/${categoryID}`,
                    headers: {},
                };
                axios(config)
                    .then(async function (response) {
                        let responseData = response.data[0].data;
                        await setData(responseData);
                        setCategoryLoad(false)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },

        }}>
            {children}
        </Context.Provider>
    )
}
