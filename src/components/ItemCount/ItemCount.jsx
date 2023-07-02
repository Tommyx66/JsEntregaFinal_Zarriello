import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial)

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }

    return (
        <>
            <div className='detail-container'>
                <button className='miBtn' onClick={decrementar} > - </button>
                <strong> {contador} </strong>
                <button className='miBtn' onClick={incrementar} > + </button>
            </div>
            <button className='detail-btn' onClick={() => funcionAgregar(contador)}>
                Agregar al Carrito
            </button>
        </>
    )
}

export default ItemCount