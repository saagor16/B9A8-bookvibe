import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import PagesRead from './pages/PagesRead';
import ListedBooks from './pages/ListedBooks';
import Fixed from './fixed/Fixed';
import Single from './section/Single';
import Read from './pages/Read';
import Wishlist from './pages/Wishlist';
import Error from './Error/Error';
import Review from './section/Review';
import In from './pages/In';
import Up from './pages/Up';
import Contact from './section/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Fixed></Fixed>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/single/:id",
        element:<Single></Single>,
        loader:() =>
        (fetch('../public/data.json'))
      },
      {
        path: "/pagesread",
        element: <PagesRead></PagesRead>,
        loader:() =>
        (fetch('../public/data.json'))
      },
      {
        path: "/listedbook",
        element: <ListedBooks></ListedBooks>,
        loader:() =>
        (fetch('../public/data.json')),
        children:[
          {
            index: true,
            element: <Read></Read>,
            loader:()=>(fetch('/public/data.json'))
          },
          {
            path: 'wishlist',
            element:<Wishlist></Wishlist>,
            loader:()=>(fetch('/public/data.json'))
          },
        ]
      },
      {
        path: "/review",
        element:<Review></Review>,
      },
      {
        path: "/contact",
        element:<Contact></Contact>,
      },
      {
        path: "/in",
        element:<In></In>,
      },
      {
        path: "/up",
        element:<Up></Up>,
      },
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
