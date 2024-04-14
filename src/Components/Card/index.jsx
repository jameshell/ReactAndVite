import {useContext, useState} from 'react';
import { ShoppingCartContext } from '../../Context/index.jsx';
import {PlusIcon} from "@heroicons/react/24/solid/index.js";

const Card = (data) => {
    const context = useContext(ShoppingCartContext);
    const [hover, setHover] = useState(false);
    return (
        <div 
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={()=> context.openProductDetail()}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.category.image} alt={data.data.title} />
                <div
                    onClick={() => context.setCount(context.count+1)}
                    onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}
                    className={`absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1 ${hover? 'bg-green-200':'bg-white'}`}>
                    <PlusIcon className="h-6 w-6 text-black-500" />
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    );
}

export default Card;