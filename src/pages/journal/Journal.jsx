import { FaBook, FaBuffer, FaUserGraduate, FaUsers } from "react-icons/fa";
// import JournalBooks from "../../components/journalBooks/JournalBooks";
import JournalCarousel from "../../components/journalCarousel/JournalCarousel";
import JournalMain from "./JournalMain";

const Journal = () => {
  return (
    <>
      <section>
        <JournalCarousel />
        {/* Journals main Section Start */}
        <JournalMain />
        {/* Journals main Section End */}

        {/* <JournalBooks /> */}
        <div className="bg-[#000] py-12 flex items-center">
          <div>
            {/* our mission vision section start */}
            <div className="flex flex-col md:flex-row gap-10 justify-between md:items-center mx-5 md:mx-20 bg-white rounded-tl-2xl rounded-tr-2xl p-4 md:p-10">
              <div>
                <h2 className="text-3xl font-semibold">Our Mission</h2>
                <p>
                  To provide recent updates on the discoveries, developments and
                  on-going activities in the areas of science and technology to
                  the academicians, researchers and scholars seeking
                  information, in an easy accessible manner.
                </p>
              </div>
              <div className="flex gap-3 md:gap-10">
                <div
                  className="w-[40vw] h-[20vh] md:w-[15vw] md:h-[30vh] rounded-2xl flex flex-col items-center justify-center gap-1 text-white"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
                  }}
                >
                  <FaBook className="text-7xl" />
                  <h2 className="text-4xl font-semibold">93+</h2>
                  <p>Journals</p>
                </div>
                <div>
                  <div
                    className="w-[40vw] h-[20vh] md:w-[15vw] md:h-[30vh] rounded-2xl flex flex-col items-center justify-center gap-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
                    }}
                  >
                    <FaUsers className="text-7xl" />
                    <h2 className="text-4xl font-semibold">1001+</h2>
                    <p>Memberships</p>
                  </div>
                </div>
              </div>
            </div>
            {/* our mission vision section end */}

            {/* our Vision vision section start */}
            <div className="flex flex-col md:flex-row gap-10 justify-between md:items-center mx-5 md:mx-20 bg-white rounded-bl-2xl rounded-br-2xl p-4 md:p-10">
              <div>
                <h2 className="text-3xl font-semibold">Our Vision</h2>
                <p>
                  To ensure the high quality of published research and review
                  articles. SAS Publishers is committed to timely and effective
                  publication of peer reviewed, high standard quality work.
                  Reputable editorial members from different disciplines and
                  specializations are dedicated to an efficient and constructive
                  review process to maintain international research publishing
                  standards.
                </p>
              </div>
              <div className="flex gap-3 md:gap-10">
                <div
                  className="w-[40vw] h-[20vh] md:w-[15vw] md:h-[30vh] rounded-2xl flex flex-col items-center justify-center gap-1"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
                  }}
                >
                  <FaBuffer className="text-7xl" />
                  <h2 className="text-4xl font-semibold">47000+</h2>
                  <p>Articles Published</p>
                </div>
                <div>
                  <div
                    className="w-[40vw] h-[20vh] md:w-[15vw] md:h-[30vh] rounded-2xl flex flex-col items-center justify-center gap-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
                    }}
                  >
                    <FaUserGraduate className="text-7xl" />
                    <h2 className="text-4xl font-semibold">2500+</h2>
                    <p>Editors & Reviewers</p>
                  </div>
                </div>
              </div>
            </div>
            {/* our mission vision section end */}
          </div>
        </div>

        
      </section>
    </>
  );
};

export default Journal;
