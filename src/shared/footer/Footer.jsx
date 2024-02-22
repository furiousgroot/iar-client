import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import {
  FaAngleRight,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  const publishers = (
    <>
      <li className="flex items-center group relative">
        <FaAngleRight />
        <FaAngleRight className="-ml-2 transform group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <Link
          to={"/"}
          className="absolute left-5 md:left-4 hover:left-6 transition-all duration-300 hover:text-[#383CC1]"
        >
          SAS Publishers, India
        </Link>
      </li>
      <li className="flex items-center group relative">
        <FaAngleRight />
        <FaAngleRight className="-ml-2 transform group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <Link
          to={"/"}
          className="absolute left-5 md:left-4 hover:left-6 transition-all duration-300 hover:text-[#383CC1]"
        >
          Scholars Middle East Publisher, Dubai
        </Link>
      </li>
      <li className="flex items-center group relative">
        <FaAngleRight />
        <FaAngleRight className="-ml-2 transform group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <Link
          to={"/"}
          className="absolute left-5 md:left-4 hover:left-6 transition-all duration-300 hover:text-[#383CC1]"
        >
          EAS Publisher, Kenya
        </Link>
      </li>
      <li className="flex items-center group relative">
        <FaAngleRight />
        <FaAngleRight className="-ml-2 transform group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <Link
          to={"/"}
          className="absolute left-5 md:left-4 hover:left-6 transition-all duration-300 hover:text-[#383CC1]"
        >
          Cross Current Publisher, India
        </Link>
      </li>
      <li className="flex items-center group relative">
        <FaAngleRight />
        <FaAngleRight className="-ml-2 transform group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <Link
          to={"/"}
          className="absolute left-5 md:left-4 hover:left-6 transition-all duration-300 hover:text-[#383CC1]"
        >
          SAR Publication, Bangladesh
        </Link>
      </li>
    </>
  );

  const importantLinks = (
    <>
      <li className="flex items-center group relative">
        <FaAngleRight />
        <FaAngleRight className="-ml-2 transform group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <Link
          to={"/"}
          className="absolute left-5 md:left-4 hover:left-6 transition-all duration-300 hover:text-[#383CC1]"
        >
          About us
        </Link>
      </li>
      <li className="flex items-center group relative">
        <FaAngleRight />
        <FaAngleRight className="-ml-2 transform group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <Link
          to={"/"}
          className="absolute left-5 md:left-4 hover:left-6 transition-all duration-300 hover:text-[#383CC1]"
        >
          Privacy Policy
        </Link>
      </li>
      <li className="flex items-center group relative">
        <FaAngleRight />
        <FaAngleRight className="-ml-2 transform group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <Link
          to={"/"}
          className="absolute left-5 md:left-4 hover:left-6 transition-all duration-300 hover:text-[#383CC1]"
        >
          Terms and Conditions
        </Link>
      </li>
      <li className="flex items-center group relative">
        <FaAngleRight />
        <FaAngleRight className="-ml-2 transform group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <Link
          to={"/"}
          className="absolute left-5 md:left-4 hover:left-6 transition-all duration-300 hover:text-[#383CC1]"
        >
          Cancellation and Refund Policy
        </Link>
      </li>
      <li className="flex items-center group relative">
        <FaAngleRight />
        <FaAngleRight className="-ml-2 transform group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <Link
          to={"/"}
          className="absolute left-5 md:left-4 hover:left-6 transition-all duration-300 hover:text-[#383CC1]"
        >
          Pricing
        </Link>
      </li>
    </>
  );

  const contactUs = (
    <>
      <li className="text-3xl md:text-4xl font-bold text-[#207398]">
        Registered office
      </li>
      <li className="text-[#758283]">
        <span className="text-white">
          <span className="text-2xl">&#8962;</span> Address:
        </span>
        H.No-204, Borhawor, P.S-Murajhar, Dist- Hojai, Assam-782439, India
      </li>
      <li className="text-[#758283]">
        <span className="text-white">✆ Mobile:</span>
        +91-8724002629, +91-9014252992
      </li>
      <li className="text-[#758283]">
        <span className="text-white">☏ Tel:</span>
        03674-267245
      </li>
      <li className="text-[#758283]">
        <span className="text-white">&#9993; Email: </span>
        office.sassociety@gmail.com, office@sassociety.com
      </li>
    </>
  );

  return (
    <>
      {/* Footer section Start */}
      <section className="mt-auto">
        <div className="md:h-[75vh] bg-[#0D0D0D] relative px-5 md:px-20 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div>
              <Link to={"/"}>
                <img src={logo} alt="logo" className="w-20" />
              </Link>

              <div>
                <p className="text-white text-justify my-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis nisi ea esse numquam temporibus itaque beatae
                  mollitia, eius iure porro earum necessitatibus quis
                  architecto.
                </p>
              </div>

              <div className="flex gap-5 text-white">
                <Link to={"/"}>
                  <FaFacebookSquare className="text-4xl hover:text-[#207398] transition-all duration-300 hover:rotate-[360deg]" />
                </Link>
                <Link to={"/"}>
                  <FaTwitterSquare className="text-4xl hover:text-[#207398] transition-all duration-300 hover:rotate-[360deg]" />
                </Link>
                <Link to={"/"}>
                  <FaLinkedin className="text-4xl hover:text-[#207398] transition-all duration-300 hover:rotate-[360deg]" />
                </Link>
                <Link to={"/"}>
                  <FaYoutubeSquare className="text-4xl hover:text-[#207398] transition-all duration-300 hover:rotate-[360deg]" />
                </Link>
              </div>
            </div>
            {/* Our Publishers section Start */}
            <div className="md:w-[300px]">
              <h2 className="text-white text-xl font-semibold">
                Our Publishers
              </h2>
              <div className="py-5 flex items-center">
                <div className="h-[2px] w-[100px] bg-[#207398]"></div>
                <div className="h-[2px] w-[150px] bg-white"></div>
              </div>
              <ul className="text-white flex flex-col gap-2">{publishers}</ul>
            </div>
            {/* Our Publishers section End */}

            {/* Important Links section Start */}
            <div className="md:w-[300px]">
              <h2 className="text-white text-xl font-semibold">
                Important Links
              </h2>
              <div className="py-5 flex items-center">
                <div className="h-[2px] w-[100px] bg-[#207398]"></div>
                <div className="h-[2px] w-[150px] bg-white"></div>
              </div>
              <ul className="text-white flex flex-col gap-2">
                {importantLinks}
              </ul>
            </div>
            {/* Important Links section End */}

            {/* Contact Us section Start */}
            <div className="md:w-[300px]">
              <h2 className="text-white text-xl font-semibold">Contact Us</h2>
              <div className="py-5 flex items-center">
                <div className="h-[2px] w-[100px] bg-[#207398]"></div>
                <div className="h-[2px] w-[150px] bg-white"></div>
              </div>
              <ul className="text-white flex flex-col gap-3">{contactUs}</ul>
            </div>
            {/* Contact Us section End */}
          </div>

          <h2 className="text-white absolute bottom-0 right-4 md:right-10">
            <small>
              &copy;{year} Developed by{" "}
              <Link
                target="_blank"
                className="text-blue-700"
                to={"https://www.linkedin.com/in/md-zubaidur-rahman-bagmar-980139206"}
              >
                Zubaidur
              </Link>
            </small>
          </h2>
        </div>
      </section>
      {/* Footer section End */}
    </>
  );
};

export default Footer;
