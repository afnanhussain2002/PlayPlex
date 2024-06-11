

const SingleProduct = ({product}) => {
    console.log(product);
    const { creator_img, creator_name, price, product_img, product_name } = product
    return (
        <>
           <div className="card card-side bg-black shadow-xl">
  <figure><img src={product_img} alt={product_name}/></figure>
  <div className="card-body">
    <h2 className="card-title">{product_name}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div> 
        </>
    );
};

export default SingleProduct;