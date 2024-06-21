import { useLoaderData } from "react-router-dom";
import ProfileGames from "./ProfileGames";


const Profile = () => {
    const userGame = useLoaderData()
    console.log(userGame); 
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
          userGame.map(game => <ProfileGames key={game._id} game={game}></ProfileGames>)
        }
      </div>
      
    </div>
    );
};

export default Profile;