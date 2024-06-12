import ImageSlider from "../imageSlider/ImageSlider";

const AboutUsSection = () => {
  return (
    <div className="mt-8 bg-[url('https://themedox.com/mykd/wp-content/uploads/2023/10/area_bg01.jpg')] bg-center bg bg-cover py-5">
      <div>
        <div className="text-center">
        <p className="font-bold text-main-color">Know About Us</p>
        <h3 className="font-semibold text-5xl text-white">Top Rated Sellers</h3>
        <hr className="bg-main-color w-8 my-4 mx-auto h-1"/>
        
        </div>
        <div className="text-center">
            <button className="btn-md border-2 border-main-color text-main-color rounded font-bold mr-2">Buy Hero </button>
            <button className="btn-md bg-main-color text-black rounded font-bold shadow-lg shadow-green-500/50">Buy Nfts </button>
        </div>
        <hr className="bg-main-color w-96 my-4 mx-auto h-1"/>
        <div className="flex justify-center gap-4">
          <img className="w-10 lg:w-12" src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab01.png" alt="" />
          <img className="w-10 lg:w-12" src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab02.png" alt="" />
          <img className="w-10 lg:w-12" src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab03.png" alt="" />
          <img className="w-10 lg:w-12" src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab04.png" alt="" />
          <img className="w-10 lg:w-12" src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab05.png" alt="" />
          <img className="w-10 lg:w-12" src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab06.png" alt="" />
        </div>
        <hr className="bg-main-color w-96 my-4 mx-auto h-1"/>
        <div className="flex flex-col justify-center items-center gap-14 max-w-7xl mx-auto lg:flex-row">
          <img className="w-600 mx-auto lg:w-96 lg:mx-0" src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_img01.jpg" alt="" />
          <div className="w-full text-center lg:text-left lg:w-80">
            <h3 className="font-bold text-3xl text-white">Human Game</h3>
            <p className="font-bold text-main-color mt-1">Rate 50%</p>
            <p className=" mt-2">Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
          </div>
        </div>
        <ImageSlider/>
      </div>
    </div>
  );
};

export default AboutUsSection;
