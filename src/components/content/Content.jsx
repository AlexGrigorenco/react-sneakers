

import { useState, useEffect } from "react";
import Card from "../cards/Card";
import loupe from './images/loupe.svg'
import axios from "axios";

const url = 'https://sneakers-fa61e-default-rtdb.europe-west1.firebasedatabase.app/'


const Content = () => {

    const [data, setData] = useState([])

    const getProduct = async () => {
        
        try{
            const res = await axios.get(url)
            return res.data
        }catch(e){
            console.error(e)
        }
    }

    useEffect(() => {
        getProduct().then(res => {
            setData(res.data)
            console.log(res.data)
        }).catch(e => {
            console.error(e)
        })

    },[])

    return ( 
        <main className="py-[42px]">
            <div className="container">
                <div className="flex justify-between gap-[10px] flex-wrap ">
                <h1 className="font-[700] text-[32px]">
                Все кроссовки
                </h1>
                <div className="search-block flex items-center gap-[14px] border border-[#F3F3F3] rounded-[10px] py-[15px] px-[18px]">
                    <img className="max-w-[16px]" src={loupe} alt="search" />
                    <input className='text-[16px] border-[none] tracking-[1px]' type="text" placeholder="Search..." />
                </div>
                </div>

                <div className="cards pt-[30px] flex gap-[30px] flex-wrap">
                        {data.map(item => <Card 
                        onPlus={() => console.log('plus', item.id)}
                        onFavorite={() => console.log('favorite', item.id)}
                        key={item.id} 
                        id={item.id} 
                        img={item.img} 
                        title={item.title} 
                        price={item.price} />)}
                </div>
            </div>
        </main>
     );
}
 
export default Content;