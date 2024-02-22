import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Thumbnail from "../../../components/thumbnail/Thumbnail";

const Collaborate = () => {
  const listLink = (
    <>
      <li>
        <Link
          to={"/"}
          className="text-[#383CC1] flex items-center gap-2 pb-1 border-b-[1px] border-[#383CC1]"
        >
          <FaArrowAltCircleRight />
          <span className="hover:text-black text-sm transition-all duration-300">
            COLLABORATE EXISTING JOURNAL
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
            PROPOSE A NEW JOURNAL
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
            COLLABORATE A SEMINAR
          </span>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <section>
        <Thumbnail title={"Collaborate with us"} />
        <ul className="flex flex-col gap-2 mt-4">{listLink}</ul>
      </section>
    </>
  );
};

export default Collaborate;
