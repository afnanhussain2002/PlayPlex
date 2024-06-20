import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const ProductDetails = () => {
  const {user} = useContext(AuthContext)
  const detailsProduct = useLoaderData();
  const { _id, productName, productPrice, productPhoto, uploaderName, uploaderPhoto, productShortDes, description} = detailsProduct
  const addGameInfo = {productName, productPrice, productShortDes, productPhoto, userEmail:user.email}
  const handleAddToCart = (_id) =>{
  
    fetch('http://localhost:5000/games/cart', {
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(addGameInfo)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Added In Your Cart",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })

  }
  return (
    <div>
      <div className="hero min-h-[600px] bg-[url('https://themedox.com/mykd/wp-content/themes/mykd/assets/img/bg/breadcrumb_bg02.jpg')] border-b-8 border-main-color">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-6xl font-bold text-white">
              GAME SINGLE PAGE
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={productPhoto}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button onClick={handleAddToCart} className="btn-md border-2 w-full border-main-color text-main-color rounded font-bold mr-2">
                    Add To Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="btn-md w-full bg-main-color text-black rounded font-bold shadow-lg shadow-green-500/50">
                    Add Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {productName}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {productShortDes}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-gray-600 ml-1 dark:text-gray-300">
                      ${productPrice}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Availability:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    In Stock
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Color:
                </span>
                <div className="flex items-center mt-2">
                  <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                  <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Size:
                </span>
                <div className="flex items-center mt-2">
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    S
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    M
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    L
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    XL
                  </button>
                  <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    XXL
                  </button>
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
