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
          <img src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab01.png" alt="" />
          <img src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab02.png" alt="" />
          <img src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab03.png" alt="" />
          <img src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab04.png" alt="" />
          <img src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab05.png" alt="" />
          <img src="https://themedox.com/mykd/wp-content/uploads/2023/10/about_tab06.png" alt="" />
        </div>
        <hr className="bg-main-color w-96 my-4 mx-auto h-1"/>
      </div>
    </div>
  );
};

export default AboutUsSection;
