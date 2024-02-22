const Info = ({ img, name, details }) => {
  return (
    <>
      <section className="flex flex-col items-center">
        <img src={img} alt="Person Img" className="m-2 h-[300px] w-[300px] border-[1px] border-black" />
        <h2 className="text-sm font-bold">{name}</h2>
        <p className="text-[#383CC1] text-xs text-center">{details}</p>
      </section>
    </>
  );
};

export default Info;
