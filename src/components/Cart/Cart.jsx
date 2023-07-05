import { Link } from "react-router-dom"
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import CartItem from "../CartItem/CartItem"
import './Cart.css'




const Cart = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext)

    const totalCantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0)

    const total = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0)
    if (totalCantidad === 0) {
        return (
            <>
                <div className="vacio">
                    <h2>No hay productos en el carrito</h2>
                   
                </div>
                <Link to='/' className="total-btn"> Seguir comprando </Link>
            </>
        )
    }
    return (
        <div >
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}

            <div className="total-container">
                <h4>Cantidad Total: {totalCantidad} </h4>
                <h4>Total: U$D {total} </h4>
                <button onClick={() => vaciarCarrito()} className="miBtn"> Vaciar carrito </button>
                <Link to='/checkout' className="cart-btn"> Finalizar compra </Link>
            </div>

        </div>
    )
}

export default Cart