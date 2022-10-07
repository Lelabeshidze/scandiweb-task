import React, { useEffect, useState } from 'react'
import { instance } from '../hooks/instance';

const UseAxios = (url) => {
 const [data, setData] = useState([]);
 useEffect(() => {
 const  getData = async () => {
    const { data:productsData } = await instance.get(url);
    setData(productsData);
    
 }
 getData();
 },[url]);
 return {
    data,
    setData,
 };
}

export default UseAxios