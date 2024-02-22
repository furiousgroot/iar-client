import { Link } from "react-router-dom";
import Thumbnail from "../../../components/thumbnail/Thumbnail";
import Info from "../../../components/info/Info";

import directorImg from "/images/Md-Abu-Gazi.jpg";
import presidentImg from "/images/ferdous.jpeg";
import Membership from "./Membership";
import JoinUs from "./JoinUs";
import Collaborate from "./Collaborate";
import Certificate from "./Certificate";
import Follow from "./Follow";

const SideBar = () => {
  return (
    <>
      <section className="md:border-[1px] md:border-black p-4 md:shadow-sm md:shadow-[#000000de]">
        {/* About us Section start */}
        <Thumbnail title={"About us"} />
        <p className="text-justify py-5 text-sm text-[#758283]">
          Scholars Academic and Scientific Society (SAS Society) is a
          non-profitable professional organization registered under Society
          Registration Act XXI of 1860, India. SAS Society was established in
          2011 with the aim to uplift scholars for the research development in
          all the fields of academic and scientific disciplines. Today, SAS
          Society is one of the leading publishers for high quality scientific
          journals. This provides a brilliant scope for academicians,
          researchers, students to boost their research and technical knowledge.
        </p>
        <Link to={"/"} className="flex justify-end">
          <button className="py-2 px-10 text-center tracking-widest uppercase font-bold rounded-xl bg-[#1FAA59] text-white">
            Know more
          </button>
        </Link>
        {/* About us Section End */}

        {/* Director Section start */}
        <div className="py-5">
          <Thumbnail title={"President"} />
          <Info
            img={directorImg}
            name={"Md. Abu Issa Gazi"}
            details={
              "Associate Professor, Jiujiang University, China"
            }
          />
        </div>
        {/* Director Section End */}

        {/* PRESIDENT Section start */}
        <div className="py-5">
          <Thumbnail title={"Secretary General"} />
          <Info
            img={presidentImg}
            name={"Dr. Ferdous Alam Siddiki"}
            details={
              "Asian University of Bangladesh"
            }
          />
        </div>
        {/* PRESIDENT Section End */}

        {/* Membership Section Start */}
        <div className="py-5">
          <Membership />
        </div>
        {/* Membership Section End */}

        {/* Join Us Section Start */}
        <div className="py-5">
          <JoinUs />
        </div>
        {/* Join Us Section End */}
      </section>

      <section className="border-t-[1px] md:border-[1px] border-black p-4 md:shadow-sm md:shadow-[#000000de] mt-10">
        {/* Collaborate Us Section Start */}
        <div className="py-5">
          <Collaborate />
        </div>
        {/* Collaborate Us Section End */}

        {/* Certificate Section Start */}
        <div className="py-5">
          <Certificate />
        </div>
        {/* Certificate Section End */}

        {/* Follow us Section Start */}
        <div className="py-5">
          <Follow />
        </div>
        {/* Follow us Section End */}
      </section>
    </>
  );
};

export default SideBar;
