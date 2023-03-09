
import { useState, useEffect } from "react";
import axios from "axios";

const url = 'https://sneakers-fa61e-default-rtdb.europe-west1.firebasedatabase.app';

export const FetchProducts = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProduct = async () => {        
        try{
            const res = await axios.get(`${url}/.json`)
            
            return res.data
        }catch(e){
            console.error(e)
            setLoading(true)
        }
    }

    useEffect(() => {
        getProduct().then(res => {
            setData(res)
            res && setLoading(false)
        }).catch(e => {
            console.error(e)
        })

    },[])

    return {data, loading}
};
