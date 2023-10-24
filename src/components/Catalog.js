import React, { useState, useEffect } from 'react';
import './styles.css';
import './productos.json'

function Catalog() {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./productos.json'); 
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo JSON.');
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      {Object.keys(productData).map((categoria) => (
        <div key={categoria}>
          <h2>{categoria}</h2>
          <ul>
            {productData[categoria].map((product, index) => (
              <li key={index}>
                <img src={product.imagen} alt={product.nombre} />
                <h3>{product.nombre}</h3>
                <p>Precio: ${product.precio}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Catalog;

