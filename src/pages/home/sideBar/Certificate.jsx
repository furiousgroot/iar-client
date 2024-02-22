import { FaArrowAltCircleRight } from "react-icons/fa";
import Thumbnail from "../../../components/thumbnail/Thumbnail";
import { Link } from "react-router-dom";

const Certificate = () => {
  const listLink = (
    <>
      <li>
        <Link
          to={"/"}
          className="text-[#383CC1] flex items-center gap-2 pb-1 border-b-[1px] border-[#383CC1]"
        >
          <FaArrowAltCircleRight />
          <span className="hover:text-black text-sm transition-all duration-300">
            DOWNLOAD EDITORIAL CERTIFICATE
          </span>
        </Link>
      </li>
      <li>
        <Link
          to={"/"}
          className="text-[#383CC1] flex items-center gap-2 pb-1 border-b-[1px] border-[#383CC1]"
        >
          <FaArrowAltCircleRight />
          <span className="hover:text-black text-sm transition-all duration-300">
            DOWNLOAD REVIEWER CERTIFICATE
          </span>
        </Link>
      </li>
      <li>
        <Link
          to={"/"}
          className="text-[#383CC1] flex items-center gap-2 pb-1 border-b-[1px] border-[#383CC1]"
        >
          <FaArrowAltCircleRight />
          <span className="hover:text-black text-sm transition-all duration-300">
            DOWNLOAD PUBLICATION CERTIFICATE
          </span>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <section>
        <Thumbnail title={"download Certificate"} />
        <ul className="flex flex-col gap-2 mt-4">{listLink}</ul>
      </section>
    </>
  );
};

export default Certificate;
