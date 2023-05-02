

import Card from "./Card";
import axios from "axios";



const Order = ({orderKey, orderData, fetchOrders}) => {

    const totalPrice = orderData.products.map(product => parseInt(product.price.replace(/\s/g, ''), 10)).reduce((acc, num) => acc + num, 0)

    async function deleteOrder(){
        try{
            await axios.delete(`https://sneakers-fa61e-default-rtdb.europe-west1.firebasedatabase.app/orders/${orderKey}.json`)
            await fetchOrders()
        }catch{
            alert('Ошибка на моменте удаления ордера')
        }
    }
    return ( 
        <div className="px-[15px] my-[20px] py-[20px] bg-[#f9f9f9]">
            <div className="py-[16px]">
                <div>
                    <span className=" text-[20px]">Ваш заказ с индивидуальным номером: </span>
                    <span className="font-[700]"> "{orderKey}"</span>
                </div>
                <div className="pt-[10px]">
                    <span>Дата создания заказа: </span>
                    <span className="font-[700]"> {orderData.date}</span>
                </div>
            </div>
            <div className="cards pt-[30px] flex gap-[30px] flex-wrap">
            {orderData.products.map(product => <Card 
            key={product.id}
            img={product.img}
            title={product.title}
            price={product.price}
            />)}
            </div>
            <div className="flex items-end gap-[20px] justify-between">
                <div className="py-[10px]">
                    <div>
                        <span>Общая стоимость заказа: </span>
                        <span className="font-[600]"> {totalPrice.toLocaleString('ru-RU')}</span>
                    </div>
                    <div className="py-[10px]">
                        <span>Налог: </span>
                        <span className="font-[600]"> {(totalPrice * 0.05).toLocaleString('ru-RU')}</span>
                    </div>
                    <div>
                        <span>Общая стоимость заказа: </span>
                        <span className="font-[600]"> {(totalPrice * 0.05 + totalPrice).toLocaleString('ru-RU')}</span>
                    </div>
                </div>
                <div>
                <button onClick={() => deleteOrder()} className='bg-[#9DD458] rounded-[18px] flex items-center gap-[20px] py-[18px] px-[32px] hover:bg-[#a12921]'>
                            <span className='text-[#fff] font-[600] '>
                            Отменить заказ
                            </span>
                        </button>
                </div>
            </div>
        </div>
     );
}
 
export default Order;