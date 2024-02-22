import { useEffect, useState } from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import BooksCard from "../../components/booksCard/BooksCard";

const api = import.meta.env.VITE_BACKEND_API;
const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`${api}/books`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <>
      <SectionTitle heading={"Books"} />
      <section className="p-20">
        <div className="grid grid-cols-4 gap-10">
          {books.map((book) => (
            <BooksCard key={book._id} book={book} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Books;
