import { Link } from "react-router-dom";
import Thumbnail from "../../../components/thumbnail/Thumbnail";

const HomeProgrammes = () => {
  return (
    <>
      <Thumbnail title={"our programmes"} />
      <div className="flex justify-end mt-4">
        <Link
          to={"/"}
          className="bg-blue-600 text-white px-8 py-3 tracking-widest rounded font-semibold"
        >
          VIEW ALL PROGRAMMES
        </Link>
      </div>
    </>
  );
};

export default HomeProgrammes;
