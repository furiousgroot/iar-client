import { useEffect, useState } from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import MagazineCard from "../../components/magazineCard/MagazineCard";
import { Link } from "react-router-dom";

const api = import.meta.env.VITE_BACKEND_API;
const Magazine = () => {
  const [magazines, setMagazines] = useState([]);
  useEffect(() => {
    fetch(`${api}/magazine`)
      .then((res) => res.json())
      .then((data) => setMagazines(data));
  }, []);
  return (
    <>
      <section>
        <SectionTitle heading={"Magazine"} />
        <div className="px-20 py-10">
          {magazines.slice(0, 1).map((magazineItem) => (
            <div key={magazineItem._id}>
              <div className="flex items-center gap-10">
                <img
                  src={magazineItem.image}
                  alt="image"
                  className="w-[40vw] h-[60vh]"
                />
                <div>
                  <h2 className="text-2xl hover:text-[#383CC1] font-bold transition-all duration-300">
                    <Link to={`/magazine/${magazineItem._id}`}>
                      {magazineItem.title}
                    </Link>
                  </h2>
                  <div className="my-5 text-sm">
                    <span>{magazineItem.details.slice(0, 300)}...</span>
                    <Link
                      to={`/magazine/${magazineItem._id}`}
                      className="text-[#383CC1] hover:underline transition-all duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <h2 className="font-bold">{magazineItem.reporter_name}</h2>
                    <p className="text-[#575757]">
                      {magazineItem.publish_date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-20 flex items-center gap-4">
          <div className="w-1 h-5 bg-black"></div>
          <h2 className="text-2xl font-semibold">বাংলাদেশ</h2>
        </div>
        <div className="px-20 grid grid-cols-3 gap-10 py-10">
          {magazines.map((magazine) => (
            <MagazineCard key={magazine._id} magazine={magazine} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Magazine;
