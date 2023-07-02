import { useState, useEffect } from 'react'
import { db } from '../../services/config';
import { collection, getDocs, where, query, doc, updateDoc } from 'firebase/firestore';
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react';
import './ItemListContainer.css'
import { Link } from 'react-router-dom';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { agregarProducto } = useContext(CarritoContext);

  useEffect(() => {
    const misProductos = query(collection(db, "inventario"), where("precio", "<", 3000));

    getDocs(misProductos)
      .then((respuesta) => {
        setProductos(respuesta.docs.map((doc) => ({
          id: doc.id, ...doc.data()
        })));
      })
      .catch((error) => {
        console.log("Error al obtener los productos", error);
      });
  }, [])


  const descontarStock = async (producto) => {
    const productoRef = doc(db, "inventario", producto.id);
    const nuevoStock = producto.stock - 1;

    await updateDoc(productoRef, { stock: nuevoStock });
  }

  const addToCartAndDiscountStock = (producto, cantidad) => {
    try {
      agregarProducto(producto, cantidad);
      descontarStock(producto);
    } catch (error) {
      console.log("Error al agregar el producto al carrito y descontar el stock", error);
    }
  }

  return (
    <div>
      <h2>Productos</h2>
      <div className='productos-container'>
        {
          productos.map((producto) => (
            <div className='producto-card' key={producto.id}>
              <h2> {producto.nombre} </h2>
              <h4> {producto.desc} </h4>
              <img className='product-image' src={producto.img} alt="{producto.nombre}"></img>
              <p> Precio: U$D {producto.precio} </p>
              <p> Stock: {producto.stock} </p>
              <button onClick={() => addToCartAndDiscountStock(producto, 1)}> Añadir al Carrito </button>
              <Link to={`/item/${producto.id}`} className='product-button'> Ver Detalles </Link>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ItemListContainer
