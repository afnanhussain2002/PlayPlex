import { useLoaderData } from "react-router-dom";
import MyCartData from "./MyCartData";
import { useState } from "react";
import Swal from "sweetalert2";

const MyCart = () => {
  const loadCartGames = useLoaderData();
  const [cartGames, setCartGames] = useState(loadCartGames)

  
  const handleDeleteProduct = _id =>{

    fetch(`http://localhost:5000/cart/${_id}`,{
      method:"DELETE",
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount > 0){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Game has been Deleted',
          showConfirmButton: false,
          timer: 1500,
        });
      }
     const remainingGames = cartGames.filter(game => game._id !== _id)
     setCartGames(remainingGames)
  })
}

  return (
    <div>
      <div className="hero min-h-[600px] bg-[url('https://themedox.com/mykd/wp-content/themes/mykd/assets/img/bg/breadcrumb_bg02.jpg')] border-b-8 border-main-color">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-6xl font-bold text-white">CART PAGE</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-7 max-w-7xl mx-auto lg:grid-cols-3">
        {
          cartGames.map(game => <MyCartData key={game._id} game={game} handleDeleteProduct={handleDeleteProduct}></MyCartData>)
        }
      </div>
    </div>
  );
};

export default MyCart;
