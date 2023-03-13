

import { NavLink } from 'react-router-dom';
import arrowBack from './images/arrowBack.svg'
import { FetchFavorite } from '../../hoocs/FetchFavorite';
import Card from '../../components/cards/Card';
import { FetchCartProducts } from '../../hoocs/FetchCartProducts';
import FavoriteEmpty from './FavoriteEmpty';

const Favorites = () => {

    const {products, favoriteEmpty, arrFavorite, getFavoriteProducts} = FetchFavorite()
    const {arrCart} = FetchCartProducts()

    return ( 
        <div className='py-[42px] min-h-[100vh] relative'>
            <div className='container flex flex-wrap items-center gap-[22px] relative z-20'>
                <NavLink to="/">
                    <button className="border border-solid border-[#F2F2F2] py-[12px] px-[14px] rounded-[8px] hover:border-[#c6c1c1]">
                        <img src={arrowBack} alt="back" />
                    </button>
                </NavLink>
                <div>
                    <p className='text-[32px] font-[700] '>Мои закладки</p>
                </div>
            </div>
            <div className=' pt-[30px] flex gap-[30px] flex-wrap'>
                {products && products.map(item => <Card 
                getFavoriteProducts={getFavoriteProducts}
                arrFavorite={arrFavorite}
                arrCart={arrCart}
                key={item.id} 
                id={item.id} 
                img={item.img} 
                title={item.title} 
                price={item.price}/>)}                
            </div>
            {favoriteEmpty && <FavoriteEmpty />}
        </div>
     );
}
 
export default Favorites;