





import { useEffect, useState } from "react";
import axios from 'axios'

const url = 'https://sneakers-fa61e-default-rtdb.europe-west1.firebasedatabase.app/favorites';


    export const FetchFavorite = () => {

        const [products, setProducts] = useState([]);
        const [favoriteEmpty, setFavoriteEmpty] = useState(false);
        const [arrFavorite, setArrFavorite] = useState([])
        
        const fetchProducts = async () => {
            try{
                const res = await axios.get(`${url}/.json`)
                return res
                
            }catch(e){
                alert(e, 'error')
            }
        }
    
        const getFavoriteProducts = () => {
            fetchProducts().then(res => {
                const arr = res.data && Object.values(res.data).filter(item => item !== null).map(item => item[Object.keys(item)[0]])
                
                !arr && setFavoriteEmpty(true)
                
                setProducts(arr || [])
                arr && setArrFavorite(arr.map(item => item.id) || [])
                // eslint-disable-next-line 
            
        }).catch(e => {
            console.error(e)
        }) 
        }
    
        useEffect(() => {
            getFavoriteProducts()
            // eslint-disable-next-line 
        }, [])

        return {products, favoriteEmpty, getFavoriteProducts, arrFavorite}
    }
