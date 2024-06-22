import { useEffect, useState } from "react";
import SingleProduct from "../singleProduct/SingleProduct";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://playplex-server.vercel.app/games")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });
  return (
    <>
      <div className="grid grid-cols-1 gap-5 mt-7 max-w-7xl mx-auto lg:grid-cols-3">
        {products.slice(0, 3).map((product) => (
          <SingleProduct key={product.id} product={product}></SingleProduct>
        ))}
      </div>
      <div className="text-center">
        <Link to={"/allGames"}>
          <button className="btn-md bg-main-color text-black rounded font-bold shadow-lg shadow-green-500/50">
            See All Games
          </button>
        </Link>
      </div>
    </>
  );
};

export default Products;
