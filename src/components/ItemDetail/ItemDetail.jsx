import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'


const ItemDetail = ({ id, nombre, precio, img, stock, desc }) => {
    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const  {agregarProducto}  = useContext(CarritoContext)


    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad)
        console.log("Productos agregados" + cantidad);
        
        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }
    return (
        <div className='contenedorItem'>
            <h2>{nombre} </h2>
            <h3>{desc}</h3>
            <h3>Precio: ${precio} </h3>
            
            <p>{desc}</p>
            <img  className='img-product' src={img} alt={nombre} />
            {
            }

            {
                agregarCantidad > 0 ? (<Link to="/cart" className='miBtn'> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </div>
    )
}

export default ItemDetail