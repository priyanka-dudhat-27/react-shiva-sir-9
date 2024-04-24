import React, { useEffect, useState } from 'react';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='product'>
            <h1 className='title'>Product</h1>
            <div className="box">
                {
                     products.map((item, index) => (
                        <div key={index} className='box2'>
                            <img src={item.image} alt={item.title} width="200px" height="200px" />
                            <h2>{item.category}</h2>
                            <p>{item.rating.rate}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Product;
