import { useEffect, useState } from "react";
import SingleProduct from "../singleProduct/SingleProduct";

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('./data/product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    })
    return (
        <div className="grid grid-cols-2 gap-5 mt-7 max-w-7xl mx-auto lg:grid-cols-3">
            {
              products.map(product =><SingleProduct key={product.id} product={product}></SingleProduct> )  
            }
        </div>
    );
};

export default Products;