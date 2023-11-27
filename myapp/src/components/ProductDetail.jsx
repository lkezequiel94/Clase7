import React, { useState } from "react";

const ProductDetail = ({ nombre, descripcion, precio, sku, cantidadDisponible }) => {
  const [compraRealizada, setCompraRealizada] = useState(false);
  const [cantidadDisponibleLocal, setCantidadDisponibleLocal] = useState(cantidadDisponible);

  const handleCompraClick = () => {
    if (cantidadDisponibleLocal > 0) {
      setCompraRealizada(true);
      setCantidadDisponibleLocal(cantidadDisponibleLocal - 1);
    } else {
      alert("El producto esta agotado");
    }
  };

  return (
    <div className="product-detail">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
      <p>SKU: {sku}</p>
      <p>Cantidad disponible: {cantidadDisponibleLocal}</p>
      
      <div>
        <button onClick={handleCompraClick}>Comprar</button>
        {compraRealizada && <p>Gracias por su compra</p>}
      </div>
    </div>
  );
};

export default ProductDetail;
