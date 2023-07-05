import { useState, useEffect, createContext } from "react";


export const CarritoContext = createContext({ 
    carrito: [],
    total: 0,
    cantidadTotal: 0
    
});

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    useEffect(() => {
        // Recuperar datos del carrito desde localStorage al cargar la página
        const carritoGuardado = localStorage.getItem("carrito");
        const totalGuardado = localStorage.getItem("total");
        const cantidadTotalGuardada = localStorage.getItem("cantidadTotal");
    
        if (carritoGuardado) {
          setCarrito(JSON.parse(carritoGuardado));
        }
    
        if (totalGuardado) {
          setTotal(Number(totalGuardado));
        }
    
        if (cantidadTotalGuardada) {
          setCantidadTotal(Number(cantidadTotalGuardada));
        }
      }, []);
    
      useEffect(() => {
        // Guardar datos del carrito en localStorage cada vez que cambien
        localStorage.setItem("carrito", JSON.stringify(carrito));
        localStorage.setItem("total", total);
        localStorage.setItem("cantidadTotal", cantidadTotal);
      }, [carrito, total, cantidadTotal]);

      
    const agregarProducto = (item, cantidad) => {
    
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }]);
            setCantidadTotal( prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setCantidadTotal( prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));

        }
    }


    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    }

    
    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    const finalizarCompra = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
    }

    

    return (
        <CarritoContext.Provider value={{ carrito, agregarProducto, eliminarProducto, vaciarCarrito,finalizarCompra, total, cantidadTotal }}>
            {children}

        </CarritoContext.Provider>
    )
}