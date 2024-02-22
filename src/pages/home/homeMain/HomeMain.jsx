import Thumbnail from "../../../components/thumbnail/Thumbnail";
import Carousel from "../carousel/Carousel";
import HomeJournals from "../homeJournals/HomeJournals";
import HomeProgrammes from "../homeProgrammes/homeProgrammes";


const HomeMain = () => {
  return (
    <>
      <Carousel />
      {/* our journals section start */}
      <section className="p-4 md:p-0 md:my-5">
        <Thumbnail title={"our journals"} />
        <HomeJournals />
        <div className="my-5">
          <HomeProgrammes />
        </div>
      </section>
      {/* our journals section end */}
    </>
  );
};

export default HomeMain;
