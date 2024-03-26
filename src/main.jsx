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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Fixed></Fixed>,
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
            
          },
          {
            path: 'wishlist',
            element:<Wishlist></Wishlist>,
            
          },
        ]
      },
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
