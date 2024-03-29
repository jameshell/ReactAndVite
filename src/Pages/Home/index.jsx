import './index.css'
import Layout from '../../Components/Layout';
import { useState, useEffect } from 'react';
import Card from '../../Components/Card/index.jsx';
import ProductDetails from '../../Components/ProductDetails/index.jsx';
function Home() {
    const [items, setItems] = useState(null);
    
    useEffect(()=> {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then((data) => {
                setItems(data);
                console.log(data);
            });
    }, []);
    
    return (
        <Layout>
            Home
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                    items?.map((item) => (
                        <Card key={item.id} data={item}/>
                    ))
                }
            </div>
            <ProductDetails />
        </Layout>
    );
}

export default Home
