import { Link } from "react-router-dom";
import Thumbnail from "../../../components/thumbnail/Thumbnail";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Membership = () => {
  const listLink = (
    <>
      <li>
        <Link
          to={"/"}
          className="text-[#383CC1] flex items-center gap-2 pb-1 border-b-[1px] border-[#383CC1]"
        >
          <FaArrowAltCircleRight />
          <span className="hover:text-black text-sm transition-all duration-300">
            FELLOW MEMBER (FSASS)
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
            EMINENT FELLOW MEMBER (SEFM)
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
            LIFE MEMBER (LMSASS)
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
            REGULAR MEMBER (RMSASS)
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
            YOUNG RESEARCH FELLOW (SYRFM)
          </span>
        </Link>
      </li>
      <li>
        <Link to={"/"} className="text-[#383CC1] flex items-center gap-2 pb-1">
          <FaArrowAltCircleRight />
          <span className="hover:text-black text-sm transition-all duration-300">
            JOIN MEMBERSHIP
          </span>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <section>
        <Thumbnail title={"memberships"} />
        <ul className="flex flex-col gap-2 mt-4">{listLink}</ul>
      </section>
    </>
  );
};

export default Membership;
