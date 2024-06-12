import { Link } from "react-router-dom";



const SingleProduct = ({product}) => {
    
    const { id, creator_img, creator_name, price, product_img, product_name } = product
    return (
        <>
           <div className="bg-sec-color border border-main-color flex flex-col justify-center gap-5 items-center rounded-lg py-5 
            shadow-lg shadow-green-500/50 lg:flex-row">
            <div>
              <img className="w-28 h-20 rounded-lg" src={product_img} alt={product_name} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{product_name}</h3>
              <div className="flex items-center gap-1 text-xs">
                <img className="w-10" src={creator_img} alt="creator" />
                <p>{creator_name} ||</p>
                <p>Creator</p>
              </div>
              <div className="flex items-center gap-5 justify-around border p-2 rounded border-main-color">
                <p className="font-bold">${price}</p>
                <div>
                 <Link to={`/product/${id}`}><button className=" btn-sm bg-main-color text-black rounded">Buy Now</button></Link> 
                </div>
              </div>
            </div>
           </div>
        </>
    );
};

export default SingleProduct;