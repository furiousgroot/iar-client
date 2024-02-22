import SectionTitle from "../../components/sectionTitle/SectionTitle";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import AboutMembers from "./AboutMembers";
import AboutSide from "./AboutSide";

const About = () => {
  return (
    <>
      <section className="md:py-10 relative">
        <SectionTitle heading={"About Us"} />
        <div className="px-5 md:px-20">
          <div className="flex flex-col-reverse md:flex-row md:gap-8 md:my-5">
            {/* about side nav section start */}
            <div className="w-full md:w-[40vw]">
              <AboutSide />
            </div>
            {/* about side nav section end */}

            {/* about main section Start */}
            <div className="w-full md:w-[60vw]">
              {/* administration section start */}
              <div>
                <Thumbnail title={"administration"} />
                <div className="font-extrabold my-5">
                  <h2>Dr. Nermin Gozukirmizi</h2>
                  <h2>Professor</h2>
                  <h2>Dept. of Molecular Biology and Genetics</h2>
                  <h2>Istinye Universitesi</h2>
                  <h2>Istanbul, Turkey</h2>
                </div>
                <div>
                  <p className="text-justify">
                    <span className="font-extrabold">
                      Prof. Dr. Nermin Gözukirmizi
                    </span>{" "}
                    is the Scientific Advisor and Professor at Istanbul
                    University, Istanbul, Turkey. She started at the Dept. of
                    Biology at Istanbul University as an Associate Professor in
                    1985 and became a Professor in 1992. Prof. Nermin
                    Gözukirmizi has been working at the Dept. of Molecular
                    Biology and Genetics since 2003. She is an Academic Member
                    of Istanbul University since 1972. She took part in the
                    Establishment of the Plant Biotechnology Research Unit at
                    TÜBİTAK Marmara Research Center, Research Institute for
                    Genetic Engineering and Biotechnology, 1992-2006, and
                    1992-2006. She also had an active role in the establishment
                    of the Molecular Biology and Genetics Dept. at Istanbul
                    University. Her areas of research include plant tissue
                    culture systems and gene transfer, polymorphism and
                    molecular markers, GMO analysis, and biosafety, and
                    epigenetics. She teaches undergraduate and graduate-level
                    courses on these subjects.
                  </p>
                  <br />
                  <p className="text-justify">
                    <span className="font-extrabold">Prof. Nermin</span> has
                    performed lots of research with different plant species such
                    as barley, wheat, potatoes, cicer, poplar, cotton and She is
                    an author or co-author of numerous scientific papers (70)
                    and several book chapters (25). Her recent internationally
                    published scientific papers are related to retrotransposons,
                    gene transfers, and salt tolerance. Prof. Nermin Gozukirmizi
                    supervised 25 MSc and 22 PhD theses, and her students
                    (Assistant Professors, Associate Professors, and Professors)
                    contribute valuable information to scientists in Turkey and
                    other countries all over the world.
                  </p>
                </div>
              </div>
              {/* administration section end */}

              <AboutMembers />

              {/* amis and objects section start */}
              <Thumbnail title={"amis and objects"} />
              <p className="text-justify my-5" id="amis">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Cupiditate sit modi cum nihil magni eligendi, ullam ad iure
                voluptates ea fugiat odit error, quaerat a sapiente. Eos
                voluptatibus quod similique itaque dicta alias eum atque
                perspiciatis enim laboriosam voluptatem doloribus impedit
                ratione odio, cum nesciunt minima unde illum eligendi beatae
                quam fugit quasi ex! Consequuntur reiciendis sit omnis libero
                veniam laborum ut. Laborum quod quis laudantium corrupti
                perferendis facilis eveniet sed dolorem omnis perspiciatis,
                incidunt eius debitis illum non dignissimos porro fuga
                asperiores pariatur? Eos, consequatur. Accusantium est modi,
                quidem nobis beatae, reiciendis voluptates saepe deserunt,
                laboriosam repellendus odio sapiente veniam error. Inventore
                voluptatem asperiores nisi delectus fugit officiis eum non
                quibusdam, consectetur dicta repudiandae numquam suscipit amet
                in quidem eligendi consequuntur, deserunt ex nostrum eius eaque
                ipsum quos sed. Autem nam molestiae libero eum asperiores ipsum,
                earum animi voluptas, aut magni debitis provident cumque
                architecto, obcaecati nesciunt aspernatur iure nobis veritatis
                explicabo fugit magnam ipsam reprehenderit. Optio quam amet,
                facilis earum exercitationem voluptatibus. Illo magni voluptates
                ducimus iste fugiat praesentium, neque similique nam.
                Consequatur a ipsam hic repudiandae veritatis repellat fugiat
                quam. Ullam praesentium numquam, aut magnam molestiae assumenda,
                officia dolorem, dolor cumque iure fuga odio distinctio enim
                repudiandae!
              </p>
              {/* amis and objects section end */}
            </div>
            {/* about main section End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
