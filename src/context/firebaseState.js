

import { useState } from "react";
import  {FirebaseContext}  from "./firebaseContext";
import axios from "axios";

const mainURL = 'https://sneakers-fa61e-default-rtdb.europe-west1.firebasedatabase.app'
const productsURL = 'https://sneakers-fa61e-default-rtdb.europe-west1.firebasedatabase.app/products';
const cartURL = 'https://sneakers-fa61e-default-rtdb.europe-west1.firebasedatabase.app/cart';
const favoriteURL = 'https://sneakers-fa61e-default-rtdb.europe-west1.firebasedatabase.app/favorites';

export const FirebaseState = ({children}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const [cartProducts, setCartProducts] = useState([])
    const [cartEmpty, setCartEmpty] = useState(false)

    const [favoriteProducts, setFavoriteProducts] = useState([])
    const [favoriteEmpty, setFavoriteEmpty] = useState(false)

    const [totalCartPrice, setTotalCartPrice] = useState(0)

    async function getMainProducts(){
        try{
        const productsResponse = await axios.get(`${productsURL}.json`)        

        setProducts(productsResponse.data)
        setLoading(false)
        }catch(error){
            console.log(error)
        }
    }

    async function getCartProducts(){
        try{
        const cartResponse = await axios.get(`${cartURL}/.json`)        

        const cartData = cartResponse.data && Object.values(cartResponse.data).filter(item => item !== null).map(item => item[Object.keys(item)[0]])
        cartData && setCartProducts(cartData)
        !cartData && setCartEmpty(true)
        return cartData
        }catch(error){
            console.log(error)
        }
    }

    async function getFavoriteProducts(){
        try{
        const favoriteResponse = await axios.get(`${favoriteURL}/.json`)

        const favoriteData = favoriteResponse.data && Object.values(favoriteResponse.data).filter(item => item !== null).map(item => item[Object.keys(item)[0]])
        !favoriteData && setFavoriteEmpty(true)
        setFavoriteProducts(favoriteData || [])
        }catch(error){
            console.log(error)
        }
    }

    async function calcTotalCartPrice(){
        try{
            const cartData = await getCartProducts()
            setTotalCartPrice(cartData.map(item => item.price).map(str => parseInt(str.replace(/\s/g, ''), 10)).reduce((acc, num) => acc + num, 0))
        }catch(error){
            console.log(error)
        }
    }


    function postProduct(path, obj, id){
        try{
            axios.post(`${mainURL}/${path}/${id - 1}.json`, JSON.stringify(obj))
        }catch{
            alert('Обновите страницу и попробуйте ещё раз!')
        }
    }

    function deleteProduct(path, id){
        return axios.delete(`${mainURL}/${path}/${id - 1}.json`)
    }

    function checkAdded (checked, id){
        if(checked === 'cart'){
            return cartProducts.some(cartRpoduct => Number(cartRpoduct.id) === Number(id))
        }else if (checked === 'favorites'){
            return favoriteProducts.some(favoriteProduct => Number(favoriteProduct.id) === Number(id))
        }
    }
    
    return (
        <FirebaseContext.Provider value={{
            products, setLoading, cartProducts, favoriteProducts, getMainProducts, getCartProducts, getFavoriteProducts, loading, cartEmpty, favoriteEmpty, totalCartPrice, calcTotalCartPrice, postProduct, deleteProduct, checkAdded
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}
 