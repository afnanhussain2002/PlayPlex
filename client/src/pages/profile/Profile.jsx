import { useLoaderData } from "react-router-dom";
import ProfileGames from "./ProfileGames";
import { useState } from "react";
import Swal from "sweetalert2";


const Profile = () => {
    const userGame = useLoaderData()
    const [games, setGames] = useState(userGame)
  
    
    const handleDeleteProduct = _id =>{
  
      fetch(`https://playplex-server.vercel.app/games/${_id}`,{
        method:"DELETE",
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Game been Deleted',
            showConfirmButton: false,
            timer: 1500,
          });
        }
       const remainingGames = games.filter(game => game._id !== _id)
       setGames(remainingGames)
    })
  }
    return (
        <div>
      <div className="hero min-h-[600px] bg-[url('https://themedox.com/mykd/wp-content/themes/mykd/assets/img/bg/breadcrumb_bg02.jpg')] border-b-8 border-main-color">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-6xl font-bold text-white">MY PROFILE</h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-7 max-w-7xl mx-auto lg:grid-cols-3">
        {
          games.map(game => <ProfileGames key={game._id} game={game} handleDeleteProduct={handleDeleteProduct}></ProfileGames>)
        }
      </div>
      
    </div>
    );
};

export default Profile;