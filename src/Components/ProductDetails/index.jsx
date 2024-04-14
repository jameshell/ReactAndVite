import './index.css';
import { XMarkIcon } from "@heroicons/react/24/solid/index.js";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";

const ProductDetails = () => {
    const context = useContext(ShoppingCartContext);
    const [hover, setHover] = useState(false);
    return (
        <aside
            className={`${context.isProductDetailOpen? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Details</h2>
                <div className='cursor-pointer'
                     onMouseEnter={()=> setHover(true)}
                     onMouseLeave={()=> setHover(false)} 
                     onClick={() => context.closeProductDetail()}>
                    <XMarkIcon className={hover ? "h-6 w-6 text-red-700 bg-gray-300 rounded-md":"h-6 w-6 text-black-700"}/>
                </div>
            </div>
        </aside>
    );
};

export default ProductDetails;

