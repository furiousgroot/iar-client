const SectionTitle = ({ heading }) => {
  return (
    <>
      <div className="flex flex-col items-center py-5">
        <span className="text-3xl md:text-6xl font-extrabold tracking-[0.5rem] uppercase textEffect bg-blue-500 p-5">
          {heading}
        </span>
      </div>
    </>
  );
};

export default SectionTitle;
