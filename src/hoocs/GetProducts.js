
import { useState, useEffect } from "react";
import axios from "axios";

const productsURL = 'https://sneakers-fa61e-default-rtdb.europe-west1.firebasedatabase.app/products';
const cartURL = 'https://sneakers-fa61e-default-rtdb.europe-west1.firebasedatabase.app/cart';
const favoriteURL = 'https://sneakers-fa61e-default-rtdb.europe-west1.firebasedatabase.app/favorites';

export const GetProducts = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const [cartProducts, setCartProducts] = useState([])
    const [cartEmpty, setCartEmpty] = useState(false)

    const [favoriteProducts, setFavoriteProducts] = useState([])
    const [favoriteEmpty, setFavoriteEmpty] = useState(false)

    async function getCartProducts(){
        try{
        const cartResponse = await axios.get(`${cartURL}/.json`)        

        const cartData = cartResponse.data && Object.values(cartResponse.data).filter(item => item !== null).map(item => item[Object.keys(item)[0]])
        !cartData && setCartEmpty(true)
        setCartProducts(cartData || [])
        }catch(e){
            console.log(e)
        }
    }

    async function getFavoriteProducts(){
        try{
        const favoriteResponse = await axios.get(`${favoriteURL}/.json`)

        const favoriteData = favoriteResponse.data && Object.values(favoriteResponse.data).filter(item => item !== null).map(item => item[Object.keys(item)[0]])
        !favoriteData && setFavoriteEmpty(true)
        setFavoriteProducts(favoriteData || [])
        }catch(e){
            console.log(e)
        }
    }


    useEffect(() => {
        async function fetchData() {
            try{
            const productsResponse = await axios.get(`${productsURL}.json`)
            await getCartProducts()
            await getFavoriteProducts()

            setProducts(productsResponse.data)
            setLoading(false)
            }catch{
                alert('Произошла ошибка! Попробуйте ещё раз или обновите страницу.')
                setLoading(true)
            }
        }
        fetchData()
    },[])

    return {products, loading, cartProducts, cartEmpty, getCartProducts, favoriteProducts, favoriteEmpty, getFavoriteProducts}
}
 
export default GetProducts;