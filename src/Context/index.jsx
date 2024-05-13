import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children}) => {
    // Shopping Cart - Increment Quantity
    const [count, setCount] = useState(0);
    // Product Details - Open/Close Product
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Product Details - Show Product
    const [productToShow, setProductToShow] = useState({});
    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}