
import { NavLink } from "react-router-dom";
import arrowBack from './images/arrowBack.svg'
import { useContext, useEffect } from "react";
import { FirebaseContext } from "../../context/firebaseContext";
import OrdersEmpty from "./OrdersEmpty";
import Order from "./Order";

const Orders = () => {

    const {getOrders, orders, ordersEmpty} = useContext(FirebaseContext)

    useEffect(() => {
        getOrders()
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
            {orders && Object.keys(orders).reverse().map(orderKey => <Order 
            key={orderKey}
            orderKey={orderKey}
            orderData={orders[orderKey]}
            getOrders={getOrders} />)}
        </div>
     );
}
 
export default Orders;