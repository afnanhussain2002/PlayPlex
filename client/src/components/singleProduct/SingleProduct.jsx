import { Link } from "react-router-dom";



const SingleProduct = ({product}) => {
    
    const { _id, productName, productPrice, productPhoto, uploaderName, uploaderPhoto} = product
    return (
        <>
           <div className="bg-sec-color border border-main-color flex flex-col justify-center gap-5 items-center rounded-lg py-5 
            shadow-lg shadow-green-500/50 lg:flex-row">
            <div>
              <img className="w-28 h-20 rounded-lg" src={productPhoto} alt={productName} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{productName}</h3>
              <div className="flex items-center gap-1 text-xs">
                <img className="w-8 rounded-full" src={uploaderPhoto} alt="creator" />
                <p>{uploaderName} ||</p>
                <p>Creator</p>
              </div>
              <div className="flex items-center gap-5 justify-around border p-2 rounded border-main-color">
                <p className="font-bold">${productPrice}</p>
                <div>
                 <Link to={`/product/${_id}`}><button className=" btn-sm bg-main-color text-black rounded">Buy Now</button></Link> 
                </div>
              </div>
            </div>
           </div>
        </>
    );
};

export default SingleProduct;