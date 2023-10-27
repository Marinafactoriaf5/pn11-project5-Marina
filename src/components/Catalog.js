import React, { useState, useEffect } from 'react';
import './styles.css';

const URL = "https://deca-api-server-c2ce4a810fea.herokuapp.com/articles";

function Catalog() {
    const [productData, setProductData] = useState({ products: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('No se pudo cargar el archivo JSON.');
                }
                const data = await response.json();
                setProductData({ products: data });
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div key="products">
                <h2 class="topVentas">TOP VENTAS</h2>
                <ul class="carousel">
                    {productData.products.map((product, index) => (
                        <li class="card" key={index}>
                            <img class="imageProduct" src={product.poster_img} alt={product.name} />
                            <p id="precio">{product.price} €</p>
                            <p>{product.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Catalog;
