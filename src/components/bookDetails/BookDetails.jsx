import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../sectionTitle/SectionTitle";
import { FaFacebookMessenger, FaPhoneSquareAlt } from "react-icons/fa";
import Popup from "reactjs-popup";

const BookDetails = () => {
  const detailsBook = useLoaderData();
  const {
    book_code,
    book_image,
    description,
    new_price,
    old_price,
    title,
    book_page_1,
    book_page_2,
    book_page_3,
    book_page_4,
  } = detailsBook;

  return (
    <>
      <SectionTitle heading={"Book Details"} />
      <section className="p-20">
        <div className="flex gap-16">
          <div className="border-2 border-black rounded-lg w-1/2 flex items-center justify-center h-[65vh]">
            <img
              src={book_image}
              alt="books"
              className="w-[20vw] h-[60vh] p-2"
            />
          </div>
          <div>
            <h2 className="text-2xl">{title}</h2>
            <div className="flex gap-5 py-3">
              <h2 className="text-xl font-semibold">&#x9F3; {new_price}</h2>
              <h2 className="text-xl font-semibold line-through text-[#575757]">
                &#x9F3; {old_price}
              </h2>
            </div>
            <div
              className="bg-green-600 py-2 text-white px-2 w-[15vw]"
              style={{
                "clip-path":
                  "polygon(100% 0%, 94% 52%, 100% 100%, 0 100%, 0% 50%, 0 0)",
              }}
            >
              <h2>প্রোডাক্ট কোড: {book_code}</h2>
            </div>
            <div className="py-3">
              <h2>পরিমান</h2>
              <div className="flex items-center py-3">
                <h2 className="border-[1px] p-1 w-10 text-center">-</h2>
                <h2 className="bg-purple-400 p-1 w-20 text-center font-bold">
                  1
                </h2>
                <h2 className="border-[1px] p-1 w-10 text-center">+</h2>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <Link
                to={"/"}
                className="bg-red-600 text-center p-1 text-white rounded"
              >
                অর্ডার করুন
              </Link>
              <Link
                to={"/"}
                className="bg-red-800 text-center p-1 text-white rounded"
              >
                কার্ট-এ যোগ করুন
              </Link>
            </div>
            <div className="py-3">
              <h2 className="text-xl">ফোনে অর্ডারের জন্য ডায়াল করুন</h2>
              <h2 className="bg-green-600 text-white p-2 w-[60%] text-xl font-semibold my-5 flex items-center rounded">
                <FaPhoneSquareAlt />
                <span className="ml-2">01611-139447</span>
              </h2>
              <h2 className="bg-blue-600 text-white p-2 w-[60%] text-xl font-semibold flex items-center rounded">
                <FaFacebookMessenger />
                <span className="ml-2">Messanger</span>
              </h2>
            </div>
            <div className="text-xl border-2 border-dotted flex justify-between px-5 py-2 my-5">
              <h2>ঢাকার ভিতরে ডেলিভারি </h2>
              <h2>&#x9F3;70</h2>
            </div>
            <div className="text-xl border-2 border-dotted flex justify-between px-5 py-2 my-5">
              <h2>ঢাকার বাইরে ডেলিভারি </h2>
              <h2> &#x9F3;130</h2>
            </div>
          </div>
        </div>
        <div className="border-2 border-black p-4 rounded-md">
          <h2 className="text-2xl font-semibold text-center underline underline-offset-8">
            Description
          </h2>
          <div className="p-5">
            <p>{description}</p>
          </div>
          <div>
            {/* <h2 className="">
              
            </h2> */}
            <Popup
              trigger={
                <button className="button bg-black text-white w-1/4 p-1 text-center block rounded-xl m-auto border-2 transition-all duration-300 hover:bg-white hover:text-black z-50">
                  More Page View
                </button>
              }
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="bg-black p-5">
                    <div className="h-[70vh] overflow-x-hidden p-5 bg-black">
                      <div className="flex flex-col gap-5">
                        <img src={book_page_1} alt="page" />
                        <img src={book_page_2} alt="page" />
                        <img src={book_page_3} alt="page" />
                        <img src={book_page_4} alt="page" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Popup>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDetails;
