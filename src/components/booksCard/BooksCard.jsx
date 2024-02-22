import { Link } from "react-router-dom";

const BooksCard = ({ book }) => {
  const { _id ,book_image, old_price, new_price, title } = book;
  return (
    <>
      <section>
        <div className="border-4 border-red-400 p-3 rounded-2xl">
          <img
            src={book_image}
            alt="book"
            className="w-[20vw] h-[50vh] border-4 border-emerald-600 rounded-2xl"
          />
          <div className="flex justify-around py-3">
            <h2 className="line-through text-[#575757] text-xl">
              &#x9F3; {old_price}
            </h2>
            <h2 className="text-xl font-semibold">&#x9F3; {new_price}</h2>
          </div>
          <h2 className="text-lg font-medium text-center">{title}</h2>
          <Link to={`/books/${_id}`}>
            <h2 className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 text-center my-2 capitalize text-white rounded p-1">
              view detail
            </h2>
          </Link>
        </div>
      </section>
    </>
  );
};

export default BooksCard;
