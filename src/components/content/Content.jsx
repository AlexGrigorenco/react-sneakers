

import { useState, useEffect, useCallback } from "react";
import Card from "../cards/Card";
import loupe from './images/loupe.svg'
import remove from './images/remove.svg'
import { FetchProducts } from "../../hoocs/FetchPriducts";
import Loader from "../loader/Loader";

const Content = ({toggleCartProduct}) => {

    const {data, loading} = FetchProducts()
    const [cartData, setCartData] = useState([])
    const [searchValue, setSearchValue] = useState('')



    function handleChildData(data) {
        const isDuplicate = cartData.some(item => item.id === data.id)         
        isDuplicate ? setCartData(cartData.filter(item => item.id !== data.id)) : setCartData(prev => [...prev, data])        
      }

      const memoizedToggleCartProduct = useCallback(toggleCartProduct, [toggleCartProduct])

      useEffect(() => {

        toggleCartProduct(cartData)
        // eslint-disable-next-line
      }, [cartData, memoizedToggleCartProduct]);



      const onChangeSearchInput = (event) => {

        setSearchValue(event.target.value)
      }

    return (
         <main className="py-[42px]">
             <div className="container  relative">
                 <div className="flex justify-between gap-[10px] flex-wrap ">
                 <h1 className="font-[700] text-[32px]">
                 {searchValue ? <span className="text-[28px]">Вы ведёте поиск по:  <span className="text-[24px]">'{searchValue}'</span></span> : 'Все кроссовки'}
                 </h1>
                 <div className="search-block flex items-center gap-[14px] border border-[#F3F3F3] rounded-[10px] py-[15px] px-[18px] relative">
                     <img className="max-w-[16px]" src={loupe} alt="search" />
                     <input 
                     value={searchValue}
                     onChange={onChangeSearchInput}
                     className='text-[16px] border-[none] tracking-[1px]' 
                     type="text" 
                     placeholder="Search..." />
                     {searchValue &&<button 
                     onClick={() => setSearchValue('')}
                     className="p-[4px] rounded-[4px] border border-[black] bg-[#beb3b370] absolute right-0  opacity-[0.5] hover:opacity-[1]">
                      <img src={remove} alt="remove" />
                     </button>}
                 </div>
                 </div>

                 {loading && <Loader />}

                 {data && <div className="cards pt-[30px] flex gap-[30px] flex-wrap">
                         {data
                         .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                         .map(item => <Card 
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