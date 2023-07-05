import './Checkout.css'
import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import CartItem from "../CartItem/CartItem"
import Swal from 'sweetalert2'






const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrderId] = useState("")





    const manejadorSubmit = (event) => {
        event.preventDefault()
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            mostrarMensajeError2('Por favor complete los campos!!')
            return
        }

        if (email !== emailConfirmacion) {
            mostrarMensajeError("Los emails no coinciden")
            return
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                img: producto.item.img,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        }

        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrderId(docRef.id)
                vaciarCarrito()
                mostrarMensajeExito(docRef.id)
            })
            .catch((error) => {
                console.log("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden, vuelva mas tarde")
            })
    }

    const mostrarMensajeExito = (ordenId) => {
        Swal.fire(
          '¡Gracias por tu compra!',
          `Tu número de orden es: ${ordenId}`,
          'success'
        )
      }

      const mostrarMensajeError = (mensaje) => {
        Swal.fire({
          icon: 'error',
          title: 'Los emails no coinciden',
          text: 'Ingresalos nuevamente'
        })
      }
    const mostrarMensajeError2 = (mensaje) => {
        Swal.fire({
            icon: 'warning',
            title: 'Por favor complete los campos!!',
            text: 'Para finalizar su compra, llene todos los campos'
          })
    }


    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={manejadorSubmit} className="formulario">

                {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
                <div className="total-container">
                    <h4>Total: U$D {total} </h4>
                </div>

                <hr />

                <div className="form-group">
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>


                <div className="form-group">
                    <label htmlFor="">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Confirmar Email</label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>



                {
                    error && <p style={{ color: "white" }}> {error} </p>
                }
                <button type="submit" className='miBtn' > Finalizar Orden </button>

               


            </form>

        </div>
    )
}

export default Checkout