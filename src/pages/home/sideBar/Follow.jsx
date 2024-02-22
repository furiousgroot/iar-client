import { Link } from "react-router-dom";
import Thumbnail from "../../../components/thumbnail/Thumbnail";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare, FaYoutubeSquare } from "react-icons/fa";

const Follow = () => {
  const listLink = (
    <>
      <li>
        <Link to={"/"}>
            <FaFacebookSquare className="text-6xl text-[#1877F2]" />
        </Link>
      </li>
      <li>
        <Link to={"/"}>
            <FaTwitterSquare className="text-6xl text-[#00acee]" />
        </Link>
      </li>
      <li>
        <Link to={"/"}>
            <FaYoutubeSquare className="text-6xl text-[#CD201F]" />
        </Link>
      </li>
      <li>
        <Link to={"/"}>
            <FaLinkedin className="text-6xl text-[#0072b1]" />
        </Link>
      </li>
      <li>
        <Link to={"/"}>
            <FaWhatsappSquare className="text-6xl text-[#59CE72]" />
        </Link>
      </li>
    </>
  );
  return (
    <>
      <section>
        <Thumbnail title={"follow us"} />
        <ul className="flex items-center gap-2 mt-4">{listLink}</ul>
      </section>
    </>
  );
};

export default Follow;
