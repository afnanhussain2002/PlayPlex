import { useLoaderData } from "react-router-dom";
import MyCartData from "./MyCartData";

const MyCart = () => {
  const loadCartGames = useLoaderData();
  console.log(loadCartGames);

  return (
    <div>
      <div className="hero min-h-[600px] bg-[url('https://themedox.com/mykd/wp-content/themes/mykd/assets/img/bg/breadcrumb_bg02.jpg')] border-b-8 border-main-color">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-6xl font-bold text-white">GAME SINGLE PAGE</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-7 max-w-7xl mx-auto lg:grid-cols-3">
        {
          loadCartGames.map(game => <MyCartData key={game._id} game={game}></MyCartData>)
        }
      </div>
    </div>
  );
};

export default MyCart;
