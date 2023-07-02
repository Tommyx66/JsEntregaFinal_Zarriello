import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartItem/CartItem"
import ItemListContainer from "../ItemListContainer/ItemListContainer"


const Cart = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext)

    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0)

    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0)
    if (totalCantidad === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to='/' className="miBtn"> Seguir comprando </Link>
            </>
        )
    }
    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <img className='product-image' src={carrito[0].item.imagen} alt={carrito[0].item.nombre} />
            <h3>Cantidad Total: {totalCantidad} </h3>
            <h3>Total: $ {total} </h3>
            <button onClick={() => vaciarCarrito()} className="miBtn"> Vaciar carrito </button>
            <Link to='/checkout' className="miBtn"> Finalizar compra </Link>
        </div>
    )
}

export default Cart