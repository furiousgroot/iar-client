import Thumbnail from "../../components/thumbnail/Thumbnail";
import visionIcon from "/images/Vision-Icon.png";
import missionIcon from "/images/Mission-icon.png";

const AboutSide = () => {
  return (
    <>
      <section className="md:border-[1px] md:border-black p-4 md:shadow-sm md:shadow-[#000000de]">
        <Thumbnail title={"About IAR Society"} />
        <p className="py-5 text-justify">
          Scholars Academic and Scientific Society (SAS Society) is a
          non-profitable professional organization registered under Society
          Registration Act XXI of 1860, India. SAS Society was established in
          2011 with the aim to uplift scholars for the research development in
          all the fields of academic and scientific disciplines. Today, SAS
          Society is one of the leading publishers for high quality scientific
          journals. This provides a brilliant scope for academicians,
          researchers, students to boost their research and technical knowledge.
          SAS Society which is presently publishers for scientific journals
          namely SAS Publishers, India, Scholars Middle East Publishers, Dubai,
          UAE, SAR Publication, Bangladesh and Cross current Publisher, India.
          These publishers are currently publishing 77 monthly journals in all
          major areas scientific disciplines. Due to tremendous contribution of
          our authors, researchers, editorial board members, reviewers and our
          staff members, we reached a good and one of the reliable promising
          publishers of scientific journals in short span of time. SAS Society
          is aimed to serve the researchers around the globe with over 200 plus
          open access scientific journals.
          <br />
          <br />
          Though SAS Society is dedicated for Scientific publication, it also
          involve to uplift the society in education and research by doing all
          the means such as scientific conferences, providing professional
          memberships and making a professional network to exchange views and
          ideas, proving scholarship and other facilities to poor and
          meritorious students, to share the scholarly news and achievements
          through media channels and never the less to involve in all social
          welfare activities.{" "}
        </p>
        {/* Vision Section Start */}
        <Thumbnail title={"Vision"} />
        <div className="flex justify-center pt-5">
          <img src={visionIcon} alt="img" />
        </div>
        <h2 className="text-red-600 py-5 text-center">
          <i>
            &quot;To become one of the best organizations for exploring scholars
            to success devoting it works in education and research.&quot;
          </i>
        </h2>
        {/* Vision Section End */}

        {/* Mission Section Start */}
        <Thumbnail title={"Mission"} />
        <div className="flex justify-center pt-5">
          <img src={missionIcon} alt="img" />
        </div>
        <ul className="text-red-600 py-5 text-justify list-disc pl-5 italic">
          <li>
            SAS Group of Organizations in the mission to work in all the fields
            to full fill its vision in support of SASPR Edu International Pvt.
            Ltd. and SAS Society involving in Publishing Journals and Books,
            Research work, Imparting Education, Organizing Conferences, Seminars
            and Workshops, Recognition and Awards, Media Services and Social
            Services.
          </li>
          <li>
            In shortly by 2020 it is aimed to start with a unique way with world
            class infrastructure quality educational institutes in rural
            society.
          </li>
          <li>
            In upcoming days it is aimed to collaborate premier educational
            organizing to expand it globally and achieve its vision.
          </li>
        </ul>
        {/* Mission Section End */}
      </section>
    </>
  );
};

export default AboutSide;
