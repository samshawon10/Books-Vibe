import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root'
import ErrorPage from './ErrorPage/ErrorPage'
import Home from './Home/Home'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BooksDetails from './BookDetails/BooksDetails'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "books/:bookId",
        element:<BooksDetails></BooksDetails>,
        loader: () => fetch('/public/booksData.json'),
      },
    // {
    //   path:"/listedbooks" ,
    //   element: <ListedBooks></ListedBooks>,
    //   loader: () => fetch('/public/booksData.json'),
    // },
    {
      path: "/ListedBooks/:id",
      element: <h2 className="text-5xl">This is Listed Books</h2>
    },
    {
      path: "/ListedBooks/:id/:name",
      element: <h2 className="text-5xl">This is Listed Books</h2>
    },
    {
      path: "/ListedBooks/:id/:name/:author",
      element: <h2 className="text-5xl">This is Listed Books</h2>
    },
    {
      path: "/PagetoRead",
      element: <h2 className="text-5xl">This is Pages to Read</h2>
    }
    ]},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
   
  </StrictMode>,
)
