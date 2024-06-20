import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const updateGame = useLoaderData()
   
      const handleAddProduct = e =>{
          e.preventDefault()
          const form = e.target ;
          const productName = form.productName.value;
          const productPrice = form.productPrice.value;
          const category = form.category.value;
          const productPhoto = form.productPhoto.value;
          const productPhoto2 = form.productPhoto2.value;
          const productPhoto3 = form.productPhoto3.value;
          const productPhoto4 = form.productPhoto4.value;
          const productShortDes = form.productShortDes.value;
          const gameTrailer = form.gameTrailer.value;
          const description = form.description.value;
  
          const product ={productName,productPhoto,productPhoto2, productPhoto3,productPhoto4, productPrice,category, productShortDes, gameTrailer, description, uploaderName,uploaderPhoto }
          
          if (productName.length > 15) {
            return alert('Game name must be below 16 characters')
          }
  
          if (productShortDes.length > 80 || productShortDes.length < 50) {
            return alert('Short description must be more then 50 characters and below 80 characters')
          }
          console.log(product);
  
          fetch('http://localhost:5000/games',{
           method:'POST',
           headers:{
            'content-type':'application/json'
           },
           body:JSON.stringify(product)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Game Update Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              form.reset()
            }
          })
      }
    return (
      <div>
          {/* Banner part */}
        <div className="hero min-h-[600px] bg-[url('https://themedox.com/mykd/wp-content/themes/mykd/assets/img/bg/breadcrumb_bg02.jpg')] border-b-8 border-main-color">
          <div className="hero-content text-center">
            <div className="max-w-lg">
              <h1 className="text-6xl font-bold text-white">UPDATE GAME</h1>
            </div>
          </div>
        </div>
  
        {/* full form part */}
  
        <div className="max-w-4xl p-6 mx-auto rounded-md shadow-lg shadow-green-500/50 border-4 border-main-color mt-20 mb-20">
      <h1 className="text-xl font-bold text-white capitalize dark:text-white">Update Game</h1>
      <form onSubmit={handleAddProduct}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                  <label className="text-white dark:text-gray-200" >Game Name</label>
                  <input id="productName" required type="text" defaultValue={updateGame.productName} name="productName" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
              </div>
              <div>
                  <label className="text-white dark:text-gray-200" >Game Price</label>
                  <input id="productPrice" required type="number" defaultValue={updateGame.productPrice} name="productPrice" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
              </div>
  
              <div>
                  <label className="text-white dark:text-gray-200">Select Category</label>
                  <select name="category" defaultChecked={updateGame.category} required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                      <option>Action</option>
                      <option>Adventure</option>
                      <option>Horror</option>
                      <option>Racing</option>
                  </select>
              </div>
            
                <div>
                  <label className="text-white dark:text-gray-200" >Game Photo Url</label>
                  <input id="productPhoto" required type="text" defaultValue={updateGame.productPhoto} name="productPhoto" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
              </div>
                <div>
                  <label className="text-white dark:text-gray-200" >Game Photo Url 2</label>
                  <input id="productPhoto2" required type="text" name="productPhoto2" defaultValue={updateGame.productPhoto2} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
              </div>
                <div>
                  <label className="text-white dark:text-gray-200" >Game Photo Url 3</label>
                  <input id="productPhoto3" required type="text" name="productPhoto3" defaultValue={updateGame.productPhoto3} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
              </div>
                <div>
                  <label className="text-white dark:text-gray-200" >Game Photo Url 4</label>
                  <input id="productPhoto4" required type="text" name="productPhoto4" defaultValue={updateGame.productPhoto4} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
              </div>
                <div>
                  <label className="text-white dark:text-gray-200" >Game Short Description</label>
                  <input id="productShortDes" required type="text" name="productShortDes" defaultValue={updateGame.productShortDes} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
              </div>
                <div>
                  <label className="text-white dark:text-gray-200" >Game Trailer Link</label>
                  <input id="gameTrailer" required type="text" name="gameTrailer" defaultValue={updateGame.gameTrailer} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
              </div>
              <div>
                  <label className="text-white dark:text-gray-200" >Game Description</label>
                  <textarea id="textarea" required type="textarea" name="description" defaultValue={updateGame.description} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
              </div>
              <div>
  
              </div>
          </div>
  
          <div className="flex justify-end mt-6">
              <button className=" p-2 rounded-md bg-main-color text-black font-bold">Add Game</button>
          </div>
      </form>
  </div>
  
      </div>
    );
  };
  
  export default UpdateProduct;