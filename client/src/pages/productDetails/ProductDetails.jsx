import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const loadProducts = useLoaderData();
  console.log(loadProducts);
  const { id } = useParams();
  if (!loadProducts) {
    return <div>Loading...</div>;
  }
  const findProduct = loadProducts.find((product) => product.id == id);
  console.log(findProduct);
  console.log(id);
  const {  creator_img, creator_name, price, product_img, product_name, short_description,release_date } = findProduct
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Details Of {product_name}</h1>
            <p className="py-6">
              {short_description}
            </p>
            <button className="btn btn-primary">{release_date}</button>
          </div>
        </div>
      </div>
      Product details of {id}
    </div>
  );
};

export default ProductDetails;
