const AddProduct = () => {
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
    <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-white dark:text-gray-200" for="username">Product Name</label>
                <input id="productName" type="text" name="productName" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-white dark:text-gray-200" for="username">Product Price</label>
                <input id="productPrice" type="number" name="productPrice" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-white dark:text-gray-200" for="passwordConfirmation">Select Category</label>
                <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option>Surabaya</option>
                    <option>Jakarta</option>
                    <option>Tangerang</option>
                    <option>Bandung</option>
                </select>
            </div>
          
              <div>
                <label className="text-white dark:text-gray-200" for="username">Product Photo Url</label>
                <input id="productName" type="text" name="productName" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-white dark:text-gray-200" for="passwordConfirmation">Product Description</label>
                <textarea id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
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
