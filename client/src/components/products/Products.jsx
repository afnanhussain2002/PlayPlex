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
        <div>
            {
              products.map(product =><SingleProduct key={product.id} product={product}></SingleProduct> )  
            }
        </div>
    );
};

export default Products;