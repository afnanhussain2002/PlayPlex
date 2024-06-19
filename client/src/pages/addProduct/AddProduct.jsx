import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const AddProduct = () => {
  const {user} = useContext(AuthContext)
    const handleAddProduct = e =>{
        e.preventDefault()
        const form = e.target ;
        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const category = form.category.value;
        const productPhoto = form.productPhoto.value;
        const description = form.description.value;
        const uploaderName = user.displayName;
        const uploaderPhoto = user.photoURL

        const product ={productName,productPhoto,productPrice,category, description, uploaderName,uploaderPhoto }
        console.log(product);
        console.log(user.displayName);

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
            alert('game is added')
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
            <h1 className="text-6xl font-bold text-white">ADD PRODUCT</h1>
          </div>
        </div>
      </div>

      {/* full form part */}

      <div className="max-w-4xl p-6 mx-auto rounded-md shadow-lg shadow-green-500/50 border-4 border-main-color mt-20 mb-20">
    <h1 className="text-xl font-bold text-white capitalize dark:text-white">Add Product</h1>
    <form onSubmit={handleAddProduct}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-white dark:text-gray-200" >Product Name</label>
                <input id="productName" type="text" name="productName" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-white dark:text-gray-200" >Product Price</label>
                <input id="productPrice" type="number" name="productPrice" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-white dark:text-gray-200">Select Category</label>
                <select name="category" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option>Action</option>
                    <option>Adventure</option>
                    <option>Horror</option>
                    <option>Racing</option>
                </select>
            </div>
          
              <div>
                <label className="text-white dark:text-gray-200" >Product Photo Url</label>
                <input id="productPhoto" type="text" name="productPhoto" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-white dark:text-gray-200" >Product Description</label>
                <textarea id="textarea" type="textarea" name="description" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>
            <div>

            </div>
        </div>

        <div className="flex justify-end mt-6">
            <button className=" p-2 rounded-md bg-main-color text-black font-bold">Add Product</button>
        </div>
    </form>
</div>

    </div>
  );
};

export default AddProduct;
