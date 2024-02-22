import { useEffect, useState } from "react";
import Thumbnail from "../../components/thumbnail/Thumbnail";

const api = import.meta.env.VITE_BACKEND_API;
const AboutMembers = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch(`${api}/member`)
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <>
      <section className="p-4 md:p-0">
        <Thumbnail title={"ADVISORY COMMITTEE"} />
        <div className="py-5 grid grid-cols-1 md:grid-cols-4 gap-1">
          {members.slice(0, 4).map((member) => (
            <div key={member.id} className="border-[1px]  rounded p-2">
              <img
                src={member.img}
                alt="img"
                className="border-[1px] border-black"
              />
              <div>
                <h2 className="text-center text-sm py-2 font-semibold">
                  {member.name}
                </h2>
                <div className="text-blue-500">
                  <h2 className="text-center md:text-xs">
                    {member.designation}, {member.institution}, {member.address}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutMembers;
