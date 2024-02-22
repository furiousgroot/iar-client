import { useEffect, useState } from "react";
import {
  FaBars,
  FaChevronDown,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";
import ActiveLink from "../../components/activeLink/ActiveLink";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);
  const navItem = (
    <>
      <li>
        <ActiveLink to={"/"}>Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to={"/about"}>About Us</ActiveLink>
      </li>
      <li>
        <ActiveLink to={"/journal"}>Journals</ActiveLink>
      </li>
      <li>
        <ActiveLink to={"/magazine"}>Magazine</ActiveLink>
      </li>
      <li>
        <ActiveLink to={"/books"}>Books</ActiveLink>
      </li>
      <li>
        <ActiveLink to={"/"}>
          Charitable Activities
          <FaChevronDown className="text-xs" />
        </ActiveLink>
        <div className="dropdown-menu">
          <ul>
            <li>
              <ActiveLink to={"/"}>Donation</ActiveLink>
            </li>
            <li>
              <ActiveLink to={"/"}>Student Welfare</ActiveLink>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <ActiveLink to={"/"}>Join with Us</ActiveLink>
      </li>
      <li>
        <ActiveLink to={"/contact"}>Contact Us</ActiveLink>
      </li>
    </>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* Navbar top part section start */}
      <div className="hidden md:block border-b-[1px] border-[#46c7a75b]">
        <div className="flex items-center justify-between px-20 py-3 bg-[#383CC1] w-full">
          {/* TODO link setup */}
          <div className="flex items-center gap-5">
            <Link to={"/"}>
              <FaFacebookF className="text-white" />
            </Link>
            <FaTwitter className="text-white" />
            <FaLinkedinIn className="text-white" />
          </div>

          <div className="flex justify-between items-center gap-8">
            <div className="text-white flex gap-2 items-center">
              <FaWhatsapp />
              <h2>+8801611-139447</h2>
            </div>
            <div className="text-white flex gap-2 items-center">
              <MdEmail />
              <h2>iarinstitute2018@gmail.com</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar top part section end */}

      <div
        className={`menu-bar z-50 h-20 w-full flex justify-between items-center md:px-20 sticky top-0 transition-colors duration-500 ${
          scrolling ? "bg-[#383CC1] shadow-2xl" : "bg-[#383CC1]"
        }`}
      >
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-[70px]" />
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden text-white"
        >
          {open ? "✕" : <FaBars />}
        </div>
        <div className="flex items-center">
          <ul
            className={`flex flex-col md:flex-row absolute md:static bg-[#383CC1]  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-150 md:duration-0 ease-in ${
              open ? "top-16 " : "top-[-900px]"
            }`}
          >
            {navItem}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
