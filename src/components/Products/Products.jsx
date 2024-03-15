import React, { useEffect, useContext} from "react";
import "./Products.css"
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCart/ProductCard";
import Loading from "../Loading/Loading";
import AppContext from "../context/AppContexts";

function Products (){

    const {products, setProducts,loading, setLoading} = useContext(AppContext);

    
    useEffect(() =>{
        fetchProducts("iphone").then((res) => {
            setProducts(res);
            setLoading(false)
        })
    }, [])

    return(

        (loading ? <Loading/> :
            <section className="products container"> 
                {products.map((product) => <ProductCard  key={product.id} data={product}/>)}
            </section>
        )

       
    )
};

export default Products;