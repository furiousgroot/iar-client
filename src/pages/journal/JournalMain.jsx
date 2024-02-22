import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const api = import.meta.env.VITE_BACKEND_API;
const JournalMain = () => {
  const [journals, setJournals] = useState([]);
  useEffect(() => {
    fetch(`${api}/journal`)
      .then((res) => res.json())
      .then((data) => setJournals(data));
  }, []);
  // console.log(journals);
  return (
    <>
      <section className="px-5 md:px-20 py-10">
        <h2 className="text-2xl font-semibold pb-5">Our Journals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {journals.map((journal) => (
            <div key={journal._id} className="relative">
              <div className="border-2 text-[#575757] rounded-xl md:h-[80vh] p-3 relative">
                <img
                  src={journal.image}
                  alt="img"
                  className="rounded-xl md:h-[60vh] w-full"
                />
                <p className="text-center font-medium">
                  Impact Factor: {journal.impact_factor}
                </p>
                <h2 className="text-base font-semibold">
                  {journal.title.slice(0, 60)}...
                </h2>
              </div>
              <Link to={`/journal/${journal._id}`}>
                <div className="absolute top-0 bg-[#00000068] opacity-0 hover:opacity-100 rounded-xl md:w-full md:h-[80vh] flex items-center justify-center  transition-all duration-300">
                  <h2 className="bg-blue-500 px-5 py-1 rounded-lg text-white">
                    Visit
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default JournalMain;
