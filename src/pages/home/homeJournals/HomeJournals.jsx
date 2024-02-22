import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const api = import.meta.env.VITE_BACKEND_API;
const HomeJournals = () => {
  const [journals, setJournals] = useState([]);
  useEffect(() => {
    fetch(`${api}/journal`)
      .then((res) => res.json())
      .then((data) => setJournals(data));
  }, []);
  return (
    <>
      <section>
        <div className="py-5 grid grid-cols-1 md:grid-cols-4 gap-1">
          {journals.slice(0, 4).map((journal) => (
            <div key={journal._id} className="border-[1px] relative rounded  ">
              <div className="flex justify-center items-center">
                <img
                  src={journal.image}
                  alt="img"
                  className="border-[1px] border-black md:w-full md:h-[35vh]"
                />
              </div>
              <div className="text-center italic">
                <h2 className="font-semibold py-3">
                  Impact Factor : {journal.impact_factor}
                </h2>
                <h2 className="text-sm w-9/12 m-auto text-blue-500">
                  {journal.title}
                </h2>
              </div>
              <Link to={`/journal/${journal._id}`}>
                <div className="absolute top-0 bg-[#000000c7] md:w-full md:h-[59vh] flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                  <h2 className="bg-blue-500 px-5 py-1 rounded-lg text-white">
                    Visit
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Link
            to={"/journal"}
            className="bg-blue-600 text-white px-8 py-3 tracking-widest rounded font-semibold"
          >
            VIEW ALL JOURNALS
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeJournals;
