


import { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'
import heart from "./images/heart.svg"
import plus from "./images/plus.svg"
import check from "./images/check.svg"



const Card = ({img, title, price, id, onFavorite, arrId}) => {

    const [added, setAdded] = useState(false);

    useEffect(() => {
        arrId.forEach(item => {
            if(item === id){
                setAdded(!added)
            }
        })
        // eslint-disable-next-line
    },[])    
    
    const onClickPlus = () => {
        setAdded(!added)
        !added ? axios.post(`https://sneakers-fa61e-default-rtdb.europe-west1.firebasedatabase.app/cart/${id - 1}.json`, JSON.stringify({id: id, img: img, title: title, price: price})) : axios.delete(`https://sneakers-fa61e-default-rtdb.europe-west1.firebasedatabase.app/cart/${id - 1}.json`)
    }
    
    return ( 
        <div className='card w-[220px] rounded-[40px] border border-[#F3F3F3] p-[30px] flex flex-col gap-[10px]'>

            <div className="relative">
                <button onClick={onFavorite}  className="absolute  top-[0] left-[0] border p-[6px] rounded-[4px] cursor-pointer">
                    <img src={heart} alt="heart" />
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
                    className="border p-[8px] rounded-[4px] cursor-pointer">

                            {added ? <img src={check} alt="check" /> : <img src={plus} alt="plus" />}

                    </button>
                </div>
            </div>
            
        </div>
     );
}
 
export default Card;