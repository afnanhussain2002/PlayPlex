

const MyCartData = ({game, handleDeleteProduct}) => {
    const {
        _id,
        productName,
        productPrice,
        productShortDes,
        productPhoto

      } = game;
    return (
        <>
            <div className=" shadow-lg shadow-green-500/50 border-2 border-main-color rounded-lg overflow-hidden my-10 lg:max-w-xs">
        <div className="px-4 py-2">
          <h1 className="text-main-color font-bold text-3xl uppercase">
            {productName}
          </h1>
          <p className="text-white text-sm mt-1">{productShortDes}</p>
        </div>
       
        <img
          className="h-56 w-full object-cover mt-2"
          src={productPhoto}
          alt={productName}
        />
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-main-color font-bold text-xl">${productPrice}</h1>
          <div className="space-x-1">
          <button className="px-3 py-1 bg-main-color text-sm text-black font-semibold rounded">
              Pay
            </button>
        <button onClick={() =>handleDeleteProduct(_id)} className="px-3 py-1 bg-main-color text-sm text-black font-semibold rounded">
          Delete
        </button>
          </div>
          
           
         
        </div>
       
     
     
       
        
      </div> 
        </>
    );
};

export default MyCartData;