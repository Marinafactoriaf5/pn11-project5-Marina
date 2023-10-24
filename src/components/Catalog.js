import React, { useState, useEffect } from 'react';
import './styles.css';

function Catalog() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error en la solicitud fetch:', error);
          setLoading(false);
        });
    }, []);
  
    const productsByCategory = {};
    products.forEach((product) => {
      if (!productsByCategory[product.category]) {
        productsByCategory[product.category] = [];
      }
      productsByCategory[product.category].push(product);
    });
  
    return (
      <div>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <div>
            {Object.keys(productsByCategory).map((category) => (
              <div key={category}>
                <h2>{category}</h2>
                <ul>
                  {productsByCategory[category].map((product) => (
                    <li key={product.id}>
                      <img src={product.image} alt={product.title} />
                      <h3>{product.title}</h3>
                      <p>Precio: ${product.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default Catalog;