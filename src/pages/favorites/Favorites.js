

import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import arrowBack from './images/arrowBack.svg'
import Card from '../../components/cards/Card';
import FavoriteEmpty from './FavoriteEmpty';
import { FirebaseContext } from '../../context/firebaseContext';

const Favorites = () => {

    const {favoriteEmpty, favoriteProducts, cartProducts, getFavoriteProducts} = useContext(FirebaseContext)

    useEffect(() => {
        getFavoriteProducts()
        // eslint-disable-next-line
    }, [])

    return ( 
        <div className='py-[42px] min-h-[100vh] relative'>
            <div className='container flex flex-wrap items-center gap-[22px] relative z-20'>
                <NavLink to="/react-sneakers">
                    <button className="border border-solid border-[#F2F2F2] py-[12px] px-[14px] rounded-[8px] hover:border-[#c6c1c1]">
                        <img src={arrowBack} alt="back" />
                    </button>
                </NavLink>
                <div>
                    <p className='text-[32px] font-[700] '>Мои закладки</p>
                </div>
            </div>
            <div className=' pt-[30px] flex gap-[30px] flex-wrap'>
                {favoriteProducts && favoriteProducts.map(item => <Card
                getFavoriteProducts={getFavoriteProducts}
                arrFavorite={favoriteProducts.map(item => item.id)}
                arrCart={cartProducts.map(item => item.id)}
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