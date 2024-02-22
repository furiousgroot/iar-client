import { useLoaderData } from "react-router-dom";
import SectionTitle from "../sectionTitle/SectionTitle";

const MagazineDetails = () => {
  const detailsMagazine = useLoaderData();
  const { image, title, details, details_image, publish_date, reporter_name } =
    detailsMagazine;
  return (
    <>
      <section>
        <SectionTitle heading={"Magazine Details"} />
        <div className="px-20">
          <h2 className="text-3xl font-semibold py-10">{title}</h2>
          <img src={image} alt="img" className="rounded" />
          <p className="text-justify py-5">{details}</p>
          <div className="flex gap-10 py-10">
            <p className="w-[60vw] text-justify">{details}</p>
            <div>
              <img
                src={details_image}
                alt="details image"
                className="w-[40vw] h-[50vh]"
              />
              <div className="flex items-center gap-5 justify-end py-5">
                <p>{reporter_name}</p>
                <p>{publish_date}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MagazineDetails;
