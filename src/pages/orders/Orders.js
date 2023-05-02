
import { NavLink } from "react-router-dom";
import arrowBack from './images/arrowBack.svg'
import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../../context/firebaseContext";
import OrdersEmpty from "./OrdersEmpty";
import Order from "./Order";

const Orders = () => {

    const {getOrders} = useContext(FirebaseContext)
    const[ordersEmpty, setOrdersEmpty] = useState(true)
    const [orders, setOrders] = useState({})

    async function fetchOrders(){
        try{
            const ordersData = await getOrders()
            setOrders(ordersData)
            ordersData ? setOrdersEmpty(false) : setOrdersEmpty(true)
        }catch{
            alert('Error while get orders in Orders')
        }
    }

    useEffect(() => {
        fetchOrders()
        // eslint-disable-next-line
    }, [])
    return ( 
        <div  className='py-[42px] min-h-[100vh] relative'>
            <div className='container flex flex-wrap items-center gap-[22px] relative z-20'>
                <NavLink to="/react-sneakers">
                    <button className="border border-solid border-[#F2F2F2] py-[12px] px-[14px] rounded-[8px] hover:border-[#c6c1c1]">
                        <img src={arrowBack} alt="back" />
                    </button>
                </NavLink>
                <div>
                    <p className='text-[32px] font-[700] '>Мои заказы</p>
                </div>
            </div>
            {ordersEmpty && <OrdersEmpty />}
            {orders && Object.keys(orders).map(orderKey => <Order 
            key={orderKey}
            orderKey={orderKey}
            orderData={orders[orderKey]}
            fetchOrders={fetchOrders} />)}
        </div>
     );
}
 
export default Orders;