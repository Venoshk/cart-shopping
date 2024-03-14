import React, {useState, useEffect} from "react";
import "./Products.css"
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCart/ProductCard";

function Products (){

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetchProducts("iphone").then((res) => {
            setProducts(res);
            console.log(products)
        })
    }, [])

    

    return(
        <section className="products container">
            {products.map((product) => <ProductCard  key={product.id} data={product}/>)}
        </section>
    )
};

export default Products;