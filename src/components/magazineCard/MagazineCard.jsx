import { Link } from "react-router-dom";

const MagazineCard = ({ magazine }) => {
  const { _id,image, title, details } = magazine;

  return (
    <>
      <Link to={`/magazine/${_id}`}>
        <section className="bg-white shadow-md h-[65vh] pb-5 overflow-hidden rounded-md">
          <img src={image} alt="image" className="rounded" />
          <div className="px-5">
            <h2 className="py-5 text-base font-semibold">{title}</h2>
            <p className="text-sm text-[#575757] pb-10">
              {details.slice(0, 200)}...
            </p>
          </div>
        </section>
      </Link>
    </>
  );
};

export default MagazineCard;
