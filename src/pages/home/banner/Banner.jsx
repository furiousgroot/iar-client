import { FaBook, FaCertificate, FaFile, FaUsers } from "react-icons/fa";
import backgroundImage from "/images/banner.jpg";

const Banner = () => {
  return (
    <>
    {/* TODO Counter Dynamic */}
      <section
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-[60vh] w-full relative"
      >
        <div className="h-[60vh] w-full bg-[#00000025] absolute top-0">
          {/* Journals counter section start */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:mt-32 md:px-40 gap-10 md:gap-5 h-[60vh] overflow-x-auto">
            {/* Journals counter sub section start */}
            <div className="flex flex-col items-center gap-5">
              <div className="bg-white p-6 rounded-full">
                <FaBook className="text-3xl" />
              </div>
              <div className="text-white text-center">
                <h2 className="text-4xl font-bold">93</h2>
                <h2 className="font-bold">Journals</h2>
              </div>
            </div>
            {/* Journals counter sub section end */}
            {/* Journals counter sub section start */}
            <div className="flex flex-col items-center gap-5">
              <div className="bg-white p-6 rounded-full">
                <FaUsers className="text-3xl" />
              </div>
              <div className="text-white text-center">
                <h2 className="text-4xl font-bold">2,000+</h2>
                <h2 className="font-bold">Editors & Reviewers</h2>
              </div>
            </div>
            {/* Journals counter sub section end */}
            {/* Journals counter sub section start */}
            <div className="flex flex-col items-center gap-5">
              <div className="bg-white p-6 rounded-full">
                <FaFile className="text-3xl" />
              </div>
              <div className="text-white text-center">
                <h2 className="text-4xl font-bold">50,000+</h2>
                <h2 className="font-bold">Research Publications</h2>
              </div>
            </div>
            {/* Journals counter sub section end */}
            {/* Journals counter sub section start */}
            <div className="flex flex-col items-center gap-5">
              <div className="bg-white p-6 rounded-full">
                <FaCertificate className="text-3xl" />
              </div>
              <div className="text-white text-center">
                <h2 className="text-4xl font-bold">8</h2>
                <h2 className="font-bold ">Seminars and Conferences</h2>
              </div>
            </div>
            {/* Journals counter sub section end */}
          </div>
          {/* Journals counter section end */}
        </div>
      </section>
    </>
  );
};

export default Banner;
