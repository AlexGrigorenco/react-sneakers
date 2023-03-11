

import { useState, useEffect } from 'react'
import './style.css'
import removeImg from './images/remove.svg'
import arrow from './images/arrow.svg'
//import Card from './Card'
import axios from 'axios'

const url = 'https://sneakers-fa61e-default-rtdb.europe-west1.firebasedatabase.app/cart';



const Cart = ({onClose}) => {

    const [products, setProducts] = useState([]);
    
    const getProduct = async () => {        
        try{
            const res = await axios.get(`${url}/.json`)
            console.log(res.data)
            return res.data
        }catch(e){
            console.error(e)
        }
    }

    useEffect(() => {
        getProduct().then(res => {
            if (res.data) {
                setProducts(Object.values(res));
            } else {
                setProducts([[]]);
            }

            console.log(res)
            console.log(products)
            // eslint-disable-next-line 
        }).catch(e => {
            console.error(e)
        })
        // eslint-disable-next-line 
    },[])
    
    

    return ( 
        <div 
        onClick={onClose}
        className="wrapper fixed z-50 top-0 left-0 bg-[rgba(0,0,0,0.5)] w-[100vw] h-[100vh]">

            <div 
            onClick={(e) => e.stopPropagation()}
            className="absolute py-[32px] px-[30px] max-w-[400px] bg-[#fff] h-[100vh] right-0 flex flex-col gap-[30px] ">

                <div className='flex items-center justify-between'>
                    <h2 className="font-[700] text-[24px] ">Корзина</h2>
                    <div>
                        <div  
                        onClick={onClose}
                        className='opacity-[0.5] hover:opacity-[1] w-[32px] h-[32px] rounded-[8px] border border-[#DBDBDB] flex items-center justify-center cursor-pointer '>
                            <img src={removeImg} alt="remove" />
                        </div>
                    </div>
                </div>

                <div className='cart-data flex flex-col gap-[20px] max-h-[94%] justify-between grow'>

                    <div className=' flex flex-col gap-[20px] overflow-auto '>

                         {/* {data && data.map(item => <Card key={item.id} id={item.id} img={item.img} title={item.title} price={item.price} />)} */}
                    </div>

                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex items-center justify-between border-bottom-dashed'>
                            <span className='text-[16px] bg-[#fff] pr-[8px] translate-y-[4px] '>
                            Итого: 
                            </span>
                            <p className='text-[16px] pl-[8px] font-[600] bg-[#fff] translate-y-[4px] '>
                            21 498 руб.
                            </p>
                        </div>
                        <div className='flex items-center justify-between border-bottom-dashed'>
                            <span className='text-[16px] bg-[#fff] pr-[8px] translate-y-[4px] '>
                            Налог 5%:
                            </span>
                            <p className='text-[16px] pl-[8px] font-[600] bg-[#fff] translate-y-[4px] '>
                            1074 руб.
                            </p>
                        </div>

                        <div className='pt-[10px] w-[100%]'>
                        <button className='bg-[#9DD458] rounded-[18px] py-[18px] w-[100%] hover:bg-[#77a93a] relative '>
                        <span className='font-[600] text-[#fff] '>Оформить заказ</span>
                        <img className='absolute right-[20px] top-[50%] translate-y-[-50%] ' src={arrow} alt="arrow" />
                        </button>
                        </div>
                        
                    </div>

                </div>

                

            </div>

        </div>
     );
}
 
export default Cart;