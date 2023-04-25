


import { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'
import heart from "./images/heart.svg"
import activeHeart from "./images/active-heart.svg"
import plus from "./images/plus.svg"
import check from "./images/check.svg"

const url = 'https://sneakers-fa61e-default-rtdb.europe-west1.firebasedatabase.app'

const Card = ({img, title, price, id, arrCart, arrFavorite, getFavoriteProducts}) => {

    const [added, setAdded] = useState(false);
    const [favorite, setFavorite] = useState(false)

    const obj = {id: id, img: img, title: title, price: price}

    useEffect(() => {
        arrCart.forEach(item => {
            if(item === id){
                setAdded(!added)
            }
        })
        arrFavorite.forEach(item => {
            if(item === id){
                setFavorite(!favorite)
            }
        })
        // eslint-disable-next-line
    },[])    
    
    const onClickPlus = () => {
        setAdded(!added)
        try {
            if (!added) {
                axios.post(`${url}/cart/${id - 1}.json`, JSON.stringify(obj))
            } else {
                axios.delete(`${url}/cart/${id - 1}.json`)
            }
        } catch (error) {
            alert('Обновите страницу и попробуйте ещё раз!')
        }
    }
    
    const onFavorite = () => {
        setFavorite(!favorite)
        try{
            !favorite ? axios.post(`${url}/favorites/${id - 1}.json`, JSON.stringify(obj))
                    : axios.delete(`${url}/favorites/${id - 1}.json`).then(() => getFavoriteProducts())
        }catch{
            alert('Обновите страницу и попробуйте ещё раз!')
        }
    }
    
    return ( 
        <div className='card w-[220px] rounded-[40px] border border-[#F3F3F3] p-[30px] flex flex-col gap-[10px]'>
              <div className="relative">
                <button 
                style={favorite ? {background: '#FEF0F0'} : null} 
                onClick={onFavorite}  
                className="absolute  top-[0] left-[0] border border-solid border-[#ebe7e7]  p-[6px] rounded-[4px] cursor-pointer hover:border-[#d4d1d1]">
                    {favorite ? <img src={activeHeart} alt="heart" /> : <img src={heart} alt="heart" />}
                </button>
            <img className='w-[133px] h-[112px]' src={img} alt="sneakers" />
            </div>

            <p className='text-[14px] font-[400]'>{title}</p>

            <div className="flex justify-between items-center">
                <div>
                    <span className="font-[500] uppercase text-[#BDBDBD] text-[11px]">Цена:</span>
                    <p className="font-[700] text-[14px]">{price} руб.</p>
                </div>
                <div>
                    <button 
                    style={added ? {background: 'linear-gradient(180deg, #89F09C 0%, #3CC755 100%)'} : null} 
                    onClick={onClickPlus} 
                    className="border border-solid border-[#d2cece] p-[8px] rounded-[4px] cursor-pointer hover:bg-[#03b50364]">

                            {added ? <img src={check} alt="check" /> : <img src={plus} alt="plus" />}

                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Card;