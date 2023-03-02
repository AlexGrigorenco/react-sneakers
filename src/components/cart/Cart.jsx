
import data from '../cards/SneakersData.js'
import removeImg from './images/remove.svg'



const Cart = () => {
    return ( 
        <div className="wrapper absolute z-50 top-0 left-0 bg-[rgba(0,0,0,0.5)] w-[100vw] h-[100vh]">

            <div className="absolute py-[32px] px-[30px] max-w-[400px] bg-[#fff] h-[100vh] right-0 ">

                <h2 className="font-[700] text-[24px] ">Корзина</h2>

                <div className='cart-data py-[30px] flex flex-col gap-[20px] '>

                    <div className='flex items-center gap-[20px] border border-[#F3F3F3] rounded-[20px] py-[30px] px-[20px] '>
                        <div className='max-w-[70px]'>
                            <img src={data[0].img} alt="sneakers" />
                        </div>
                        <div className='flex flex-col gap-[8px] '>
                            <p className='text-[14px]'>{data[0].text}</p>
                            <p className='font-[700] text-[14px] '>{data[0].price} руб.</p>
                        </div>
                        <div>
                            <div  className='opacity-[0.5] hover:opacity-[1] w-[32px] h-[32px] rounded-[8px] border border-[#DBDBDB] flex items-center justify-center cursor-pointer '>
                                <img src={removeImg} alt="remove" />
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center gap-[20px] border border-[#F3F3F3] rounded-[20px] py-[30px] px-[20px] '>
                        <div className='max-w-[70px]'>
                            <img src={data[1].img} alt="sneakers" />
                        </div>
                        <div className='flex flex-col gap-[8px] '>
                            <p className='text-[14px]'>{data[1].text}</p>
                            <p className='font-[700] text-[14px] '>{data[1].price} руб.</p>
                        </div>
                        <div>
                            <div  className='opacity-[0.5] hover:opacity-[1] w-[32px] h-[32px] rounded-[8px] border border-[#DBDBDB] flex items-center justify-center cursor-pointer '>
                                <img src={removeImg} alt="remove" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
     );
}
 
export default Cart;