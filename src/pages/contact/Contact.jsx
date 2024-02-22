import {
  FaEnvelope,
  FaFax,
  FaHome,
  FaMapMarkerAlt,
  FaPhoneSquare,
} from "react-icons/fa";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const Contact = () => {
  return (
    <>
      <section className="md:py-10">
        <SectionTitle heading={"Contact Us"} />
        <div className="px-5 md:px-20">
          <h2 className="text-xl md:text-3xl font-bold">Registered Office</h2>
          <div className="flex items-center flex-col md:flex-row">
            <div className="flex flex-col gap-10 md:w-1/2 py-10">
              <div className="flex md:items-center gap-5">
                <FaHome className="text-5xl md:text-3xl text-yellow-500" />
                <h3>
                  H.No-204, Borhawor, P.S-Murajhar, Dist- Hojai, Assam-782439,
                  India
                </h3>
              </div>
              <div className="flex md:items-center gap-5">
                <FaPhoneSquare className="text-3xl text-yellow-500" />
                <h3>+8801611-139447</h3>
              </div>
              <div className="flex md:items-center gap-5">
                <FaFax className="text-3xl text-yellow-500" />
                <h3>03676-299906</h3>
              </div>
              <div className="flex md:items-center gap-5">
                <FaEnvelope className="text-3xl text-yellow-500" />
                <h3>iarinstitute2018@gmail.com</h3>
              </div>
            </div>
            {/* map section start */}
            <div className="md:w-1/2">
              <iframe
                className="w-[100vw] md:w-[45vw] h-[40vh] md:h-[60vh] "
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=dhaka%20New%20Haven+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
            {/* map section end */}
          </div>
          {/* branch office section start */}
          <div className="py-10">
            <h2 className="text-xl md:text-3xl font-bold pb-5">
              Our Branch offices
            </h2>
            <div className="flex flex-col md:flex-row gap-5">

              {/* message section start */}
              <div className="w-full md:w-[50vw]">
                <h2 className="text-center text-blue-500 font-semibold">Any Query</h2>
                <div>
                    <h4 className="text-[#575757] text-xl py-2">Name</h4>
                    <input type="text" placeholder="Enter Your Name" className="border-[1px] border-black p-2 w-full md:w-[90%] rounded" />
                </div>
                <div>
                    <h4 className="text-[#575757] text-xl py-2">Email</h4>
                    <input type="email" placeholder="Enter Your Email" className="border-[1px] border-black p-2 w-full md:w-[90%] rounded" />
                </div>
                <div>
                    <h4 className="text-[#575757] text-xl py-2">Message</h4>
                    <textarea cols="30" rows="10" placeholder="Enter Your Message" className="border-[1px] border-black p-2 w-full md:w-[90%] rounded"></textarea>
                </div>
                <button className="bg-[#383CC1] w-full md:w-[90%] text-white p-[10px] rounded-lg">Send</button>
              </div>
              {/* message section end */}

              <div className="py-5 flex flex-col gap-10">
                {/* Branch section start */}
                <div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-3xl text-yellow-500" />
                    <h2 className="text-2xl">India</h2>
                  </div>
                  <p className="py-3">
                    SAS Publishers, H.No-204, Borhawor, P.S-Murajhar, Dist-
                    Hojai, Assam-782439, India
                  </p>
                  <div className="flex items-center">
                    <FaPhoneSquare className="text-yellow-500" />
                    <h3>+91-8724002629</h3>
                  </div>
                </div>
                {/* Branch section end */}

                {/* Branch section start */}
                <div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-3xl text-yellow-500" />
                    <h2 className="text-2xl">Bangladesh</h2>
                  </div>
                  <p className="py-3">
                    Kadamtoli, P.O-Siddhirganj, PS-Adamjee Nagar,
                    Dist-Narayanganj, Bangladesh, Postal Code-1431
                  </p>
                  <div className="flex items-center">
                    <FaPhoneSquare className="text-yellow-500" />
                    <h3>+8801817-601011</h3>
                  </div>
                </div>
                {/* Branch section end */}
              </div>
            </div>
          </div>
          {/* branch office section end */}
        </div>
      </section>
    </>
  );
};

export default Contact;
