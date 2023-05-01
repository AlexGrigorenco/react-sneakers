

import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../context/firebaseContext';
import listImg from './images/list-img.jpg'
import arrow from './images/arrow.svg'

const OrderCreate = ({onClose}) => {

    const {getOrders} = useContext(FirebaseContext)
    const [orderId, setOrderId] = useState('')

    useEffect(() => {
        async function getOrderId(){
            const orders = await getOrders()
            const ordersKeys = Object.keys(orders)
            setOrderId(ordersKeys[ordersKeys.length - 1])
        }
        getOrderId()
        // eslint-disable-next-line
    }, [])

    return ( 
        <div className='h-[100%] flex flex-col justify-center gap-[10px] items-center grow '>
        <div className='pb-[30px] max-w-[84px]'>
            <img src={listImg} alt="boxEmpty" />
        </div>
        <p className='title text-[#87C20A] font-[600] text-[22px] text-center '>
        Заказ оформлен!
        </p>
        <p className='text-center text-[16px] max-w-[300px]'>
        <span className='opacity-40'>Ваш заказ под индивидуальным номером</span> <span className='opacity-[1] font-[600]'>{orderId}</span > <span  className='opacity-40'>скоро будет передан курьерской доставке</span>
        </p>
        <div className='pt-[30px]'>
            <button onClick={onClose} className='bg-[#9DD458] rounded-[18px] flex items-center gap-[20px] py-[18px] px-[32px] hover:bg-[#77a93a]'>
                <img className='rotate-180' src={arrow} alt="arrow" />
                <span className='text-[#fff] font-[600] '>
                Вернуться назад
                </span>
            </button>
        </div>
        </div>
     );
}
 
export default OrderCreate;