

import { useState } from "react";
import ContentLoader from "react-content-loader";
import Card from "../../components/cards/Card";
import loupe from './images/loupe.svg'
import remove from './images/remove.svg'
import { FetchProducts } from "../../hoocs/FetchPriducts";
import { FetchCartProducts } from '../../hoocs/FetchCartProducts'
import { FetchFavorite } from "../../hoocs/FetchFavorite";

const Content = () => {

    const {data, loading} = FetchProducts()

    const {arrCart} = FetchCartProducts()

    const {arrFavorite, getFavoriteProducts} = FetchFavorite()    

    const [searchValue, setSearchValue] = useState('')
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

                  <div className="cards pt-[30px] flex gap-[30px] flex-wrap">
                                            {loading && [...Array(12)].map((item, i) => <ContentLoader 
                                                className='card w-[220px] rounded-[40px] border border-[#F3F3F3] p-[30px] flex flex-col gap-[10px]'
                                                key={i}
                                                speed={1}
                                                width={240}
                                                height={260}
                                                viewBox="0 0 210 260"
                                                backgroundColor="#f6f5f4"
                                                foregroundColor="#A9E2F3"
                                              >
                                                <rect x="0" y="0" rx="4" ry="4" width="220" height="110" /> 
                                                <rect x="0" y="120" rx="4" ry="4" width="220" height="30" /> 
                                                <rect x="0" y="156" rx="4" ry="4" width="93" height="30" /> 
                                                <rect x="0" y="200" rx="10" ry="10" width="80" height="40" /> 
                                                <rect x="150" y="180" rx="10" ry="10" width="60" height="60" />
                                              </ContentLoader>)}

                                          {data && data
                                              .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                                              .map(item => <Card 
                                              arrFavorite={arrFavorite}
                                              getFavoriteProducts={getFavoriteProducts}
                                              arrCart={arrCart}
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