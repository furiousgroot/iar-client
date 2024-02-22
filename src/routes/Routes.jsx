import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Journal from "../pages/journal/Journal";
import Magazine from "../pages/magazine/Magazine";
import MagazineDetails from "../components/magazineDetails/MagazineDetails";
import Books from "../pages/books/Books";
import BookDetails from "../components/bookDetails/BookDetails";
import JournalDetails from "../components/journalDetails/JournalDetails";

const api = import.meta.env.VITE_BACKEND_API;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/journal",
        element: <Journal />,
      },
      {
        path: "/journal/:id",
        element: <JournalDetails />,
        loader: ({ params }) => fetch(`${api}/journal/${params.id}`),
      },
      {
        path: "/magazine",
        element: <Magazine />,
      },
      {
        path: "/magazine/:id",
        element: <MagazineDetails />,
        loader: ({ params }) => fetch(`${api}/magazine/${params.id}`),
      },
      {
        path: "/books",
        element: <Books />
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
        loader: ({ params }) => fetch(`${api}/books/${params.id}`),
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },
]);

export default router;
