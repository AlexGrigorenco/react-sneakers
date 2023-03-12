


import { useEffect, useState } from "react";
import axios from 'axios'

const url = 'https://sneakers-fa61e-default-rtdb.europe-west1.firebasedatabase.app/cart';


    export const FetchCartProducts = () => {

        const [products, setProducts] = useState([]);
        const [cartEmpty, setCartEmpty] = useState(false);
        
        const fetchProducts = async () => {
            try{
                const res = await axios.get(`${url}/.json`)
                return res
                
            }catch(e){
                console.error(e)
            }
        }
    
        const getProducts = () => {
            fetchProducts().then(res => {
    
                const arr = res.data && Object.values(res.data).filter(item => item !== null).map(item => item[Object.keys(item)[0]])
    
                !arr && setCartEmpty(true)
                
                setProducts(arr || [])
                // eslint-disable-next-line 
            
        }).catch(e => {
            console.error(e)
        }) 
        }
    
        useEffect(() => {
            getProducts()
            // eslint-disable-next-line 
        }, [])

        return {products, cartEmpty, getProducts}
    }
