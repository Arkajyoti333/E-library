import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from "./App";
import {Home,About,Contact,Books,Blogs,Error} from "./pages/importPages"
import './index.css';



const router=createBrowserRouter([
  {
    path : "/",
    element :<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"books",
        element:<Books/>
      },
      {
        path:"about",
        element:<About/>,
      },
      {
        path:"Contact",
        element:<Contact/>,
      },
      {
        path:"blogs",
        element:<Blogs/>,
        

      },
    ],
    errorElement:<Error/>,
   
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
