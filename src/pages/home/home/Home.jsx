import Banner from "../banner/Banner";
import HomeMain from "../homeMain/HomeMain";
import SideBar from "../sideBar/SideBar";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="flex flex-col-reverse md:flex-row md:px-20 md:gap-8 md:my-5">
        {/* side nav section start */}
        <div className="w-full md:w-[40vw]">
          <SideBar />
        </div>
        {/* side nav section end */}

        {/* Home main section Start */}
        <div className="w-full md:w-[60vw]">
          <HomeMain />
        </div>
        {/* Home main section End */}
      </div>
    </>
  );
};

export default Home;
