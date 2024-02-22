import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Thumbnail from "../../../components/thumbnail/Thumbnail";

const JoinUs = () => {
  const listLink = (
    <>
      <li>
        <Link
          to={"/"}
          className="text-[#383CC1] flex items-center gap-2 pb-1 border-b-[1px] border-[#383CC1]"
        >
          <FaArrowAltCircleRight />
          <span className="hover:text-black text-sm transition-all duration-300">
            JOIN AS CHIEF EDITOR
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
            JOIN AS ASSOCIATE EDITOR
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
            JOIN AS REVIEWER
          </span>
        </Link>
      </li>
    </>
  );
  return (
    <>
      <section>
        <Thumbnail title={"join us"} />
        <ul className="flex flex-col gap-2 mt-4">{listLink}</ul>
      </section>
    </>
  );
};

export default JoinUs;
