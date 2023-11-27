import React from "react";
import ProductDetail from "./components/ProductDetail";
import './App.css';

function App() {
  const productsData = [
    {
      nombre: 'Producto 1',
      descripcion: 'Descripción del Producto 1.',
      precio: 10000,
      sku: 'ejemplo',
      cantidadDisponible: 10,
    },
    {
      nombre: 'Producto 2',
      descripcion: 'Descripción del Producto 2.',
      precio: 10000,
      sku: 'ejemplo',
      cantidadDisponible: 10,
    },
    {
      nombre: 'Producto 3',
      descripcion: 'Descripción del Producto 3.',
      precio: 10000,
      sku: 'ejemplo',
      cantidadDisponible: 10,
    }
  ];

  return (
    <div className="App">
      <div className="header">
        <h1>Clase 7</h1>
      </div>
      <div className="container">
        {productsData.map((product, index) => (
          <ProductDetail key={index} {...product} />
        ))}
      </div>
      <div className="footer">
        <p>Este es el footer</p>
      </div>
    </div>
  );
}

export default App;
