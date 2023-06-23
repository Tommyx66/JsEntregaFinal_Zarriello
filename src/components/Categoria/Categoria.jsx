import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import NavBar from "../Navbar/Navbar";
import { Link } from 'react-router-dom'

// Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";


const Categoria = () => {
    const [product, setProduct] = useState([]);
    let { category } = useParams();

    useEffect(() => {
        const q = query(collection(db, "inventario"), where("categoria", "==", category));

        const getProducts = async () => {
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });

            setProduct(docs);
        };

        getProducts();
    }, [category]);


    return (
        <div>
            <NavBar />
            {product.map((data) => (
                <Link to={`/ItemDetail/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
                    <Item data={data} />
                </Link>
            ))}
        </div>
    );

};

export default Categoria;