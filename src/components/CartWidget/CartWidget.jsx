import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const { carrito } = useContext(CarritoContext);

  const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0)

  
  const imgCarrito = 'https://w7.pngwing.com/pngs/834/52/png-transparent-black-background-shopping-cart-icon.png';

  return (

    <Link to='/cart'>
      <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
      {
        totalCantidad > 0 && <span className='carrito-num'> {totalCantidad} </span>
      }
    </Link>
  )
}


export default CartWidget