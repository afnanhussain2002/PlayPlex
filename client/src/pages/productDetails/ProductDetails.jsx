import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import ImageSlider from "../../components/imageSlider/ImageSlider";

const ProductDetails = () => {
  const {user} = useContext(AuthContext)
  const detailsProduct = useLoaderData();
  const { _id, productName, productPrice, productPhoto, productPhoto2, productPhoto3, productPhoto4, productShortDes, description} = detailsProduct
  const addGameInfo = {productName, productPrice, productShortDes, productPhoto, userEmail:user.email}
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() =>{
    fetch(`http://localhost:5000/cart/${user.email}`)
    .then(res => res.json())
    .then(data => setCartProducts(data))
  },[user])
  // cart handle function
  const handleAddToCart = () =>{
    const stopCartDuplicate = cartProducts.find(cart => cart.productName === productName)

    if (stopCartDuplicate) {
      return  Swal.fire({
        position: "top-end",
        icon: "error",
        title: "This Game Already Added",
        showConfirmButton: false,
        timer: 1500
      });
    }

      fetch('http://localhost:5000/cart', {
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(addGameInfo)
      })
      .then(res => res.json())
      .then(data =>{
        console.log(data);
        if (stopCartDuplicate) {
          return  Swal.fire({
            position: "top-end",
            icon: "error",
            title: "This Game Already Added",
            showConfirmButton: false,
            timer: 1500
          });
        }else if (data.insertedId) {
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
      <ImageSlider img1={productPhoto} img2={productPhoto2} img3={productPhoto3} img4={productPhoto4}/>
      </div>
    </div>
  );
};

export default ProductDetails;
