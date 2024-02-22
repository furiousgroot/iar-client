import { useLoaderData } from "react-router-dom";
import SectionTitle from "../sectionTitle/SectionTitle";

const JournalDetails = () => {
  const detailsJournal = useLoaderData();
  const { image,  title } = detailsJournal;
  return (
    <>
      <SectionTitle heading={"Journal Details"} />
      <section className="px-20 py-10">
        <div className="flex gap-10">
          <div className="bg-red-400 p-5 rounded-lg w-[40vw]">
            <img src={image} alt="image" className="w-[20vw] h-[60vh]" />
            <h2 className="py-4 text-lg font-semibold">Related Journals</h2>
            <p className="cursor-pointer text-blue-500">Scholars Journal of Agriculture and Veterinary Sciences</p>
            <div>
                {/* <img src={} alt="" /> */}
            </div>
          </div>
          <div>
            <div className="bg-green-300 w-[60vw] p-3">
                <h2 className="text-2xl font-semibold">{title}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JournalDetails;
