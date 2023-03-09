

import { useState, useEffect, useCallback } from "react";
import Card from "../cards/Card";
import loupe from './images/loupe.svg'
import { FetchProducts } from "../../hoocs/FetchPriducts";
import Loader from "../loader/Loader";

const Content = ({toggleCartProduct}) => {

    const {data, loading} = FetchProducts()
    const [cartData, setCartData] = useState([])

    function handleChildData(data) {
        const isDuplicate = cartData.some(item => item.id === data.id)         
        isDuplicate ? setCartData(cartData.filter(item => item.id !== data.id)) : setCartData([...cartData, data])        
      }

      const memoizedToggleCartProduct = useCallback(toggleCartProduct, [toggleCartProduct])

      useEffect(() => {
        toggleCartProduct(cartData)
        // eslint-disable-next-line
      }, [cartData, memoizedToggleCartProduct]);

    return (
         <main className="py-[42px]">
             <div className="container  relative">
                 <div className="flex justify-between gap-[10px] flex-wrap ">
                 <h1 className="font-[700] text-[32px]">
                 Все кроссовки
                 </h1>
                 <div className="search-block flex items-center gap-[14px] border border-[#F3F3F3] rounded-[10px] py-[15px] px-[18px]">
                     <img className="max-w-[16px]" src={loupe} alt="search" />
                     <input className='text-[16px] border-[none] tracking-[1px]' type="text" placeholder="Search..." />
                 </div>
                 </div>

                 {loading && <Loader />}

                 {data && <div className="cards pt-[30px] flex gap-[30px] flex-wrap">
                         {data.map(item => <Card 
                         addToCart = {handleChildData}
                         onFavorite={() => console.log('favorite', item.id)}
                         key={item.id} 
                         id={item.id} 
                         img={item.img} 
                         title={item.title} 
                         price={item.price} />)}
                 </div>}
            </div>
         </main>
     );
}
 
export default Content;