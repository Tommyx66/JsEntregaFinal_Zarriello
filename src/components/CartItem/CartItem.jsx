import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

import './CartItem.css'



const CartItem = ({ item, cantidad}) => {
    const { eliminarProducto } = useContext(CarritoContext)
    return (
        <div className='cart-container'>
            <h4> {item.desc} </h4>
            <img className='img-cart-product' src={item.img} alt={item.desc}></img>
            <p>Cantidad: {cantidad} </p>
            <p>U$D {item.precio} </p>
            <button onClick={() => eliminarProducto(item.id)} className='cart-btn'> Eliminar producto</button>

        </div>
    )
}

export default CartItem