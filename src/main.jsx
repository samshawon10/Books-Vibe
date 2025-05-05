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
import ListedBook from './ListedBook/ListedBook';
import PageToRead from './PageToRead/PageToRead';
import Books from './Books/Books'



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
      {
        path: "/listedbooks",
        element: <ListedBook></ListedBook>,
        loader: () => fetch('/booksData.json'),
       
      },
  
   
    {
      path: "/PagetoRead",
      element: <PageToRead></PageToRead>,
    },
    {
      path: "/books",
      element: <Books></Books>,
    },

    ]},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
   
  </StrictMode>,
)
