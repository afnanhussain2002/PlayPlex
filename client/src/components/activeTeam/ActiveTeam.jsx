const ActiveTeam = () => {
  return (
    <div className="mt-8 bg-[url('https://themedox.com/mykd/wp-content/uploads/2023/10/team_bg.jpg')] bg-center bg bg-cover py-5">
      <div className="text-center">
        <p className="font-bold text-main-color">Our Team Members</p>
        <h3 className="font-semibold text-5xl text-white">Active Team Members</h3>
        <hr className="bg-main-color w-8 my-4 mx-auto h-1" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 max-w-7xl mx-auto gap-6">
      {/* card 1 */}
      <div className="space-y-5 bg-sec-color py-14 mx-auto px-10 relative rounded-lg">
        <hr className="bg-main-color h-4 shadow-lg shadow-green-500/50"/>
        <img className="border-2 rounded-full" src="https://themedox.com/mykd/wp-content/uploads/2023/10/team01.png" alt="" />
        <div className="text-center">
            <h3 className="text-2xl text-white font-bold">Ata Ullah</h3>
            <p className="text-main-color font-bold">Marketing Expert</p>
        </div>
      </div>
      {/* card 2 */}
      <div className="space-y-5 bg-sec-color py-14 mx-auto px-10 relative rounded-lg">
        <hr className="bg-main-color h-4 shadow-lg shadow-green-500/50"/>
        <img className="border-2 rounded-full" src="https://themedox.com/mykd/wp-content/uploads/2023/10/team02.png" alt="" />
        <div className="text-center">
            <h3 className="text-2xl text-white font-bold">Harsal Patel</h3>
            <p className="text-main-color font-bold">Frontend Expert</p>
        </div>
      </div>
      {/* card 1 */}
      <div className="space-y-5 bg-sec-color py-14 mx-auto px-10 relative rounded-lg">
        <hr className="bg-main-color h-4 shadow-lg shadow-green-500/50"/>
        <img className="border-2 rounded-full" src="https://themedox.com/mykd/wp-content/uploads/2023/10/team03.png" alt="" />
        <div className="text-center">
            <h3 className="text-2xl text-white font-bold">Usain Boult</h3>
            <p className="text-main-color font-bold">Backend Expert</p>
        </div>
      </div>
      {/* card 1 */}
      <div className="space-y-5 bg-sec-color py-14 mx-auto px-10 relative rounded-lg">
        <hr className="bg-main-color h-4 shadow-lg shadow-green-500/50"/>
        <img className="border-2 rounded-full" src="https://themedox.com/mykd/wp-content/uploads/2023/10/team04.png" alt="" />
        <div className="text-center">
            <h3 className="text-2xl text-white font-bold">Md Aziz</h3>
            <p className="text-main-color font-bold">Design Expert</p>
        </div>
      </div>

      </div>
    </div>
  );
};

export default ActiveTeam;
