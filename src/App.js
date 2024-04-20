import "./App.css";
import * as ReactDom from "react-dom/client";
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/layout/Header/index"
import Footer from "./components/layout/Footer/index";

const router =createBrowserRouter([
  {
    path:"/",
    element: <h1>Home</h1>,
    errorElement: <h1>404 Not Found</h1>
  },
  {
    path:"/about",
    element: <h1>About</h1>,
  },
  {
    path: "/services",
    element: <h1>Services</h1>,
  },
  {
    path:"/contact",
    element: <h1>Contact</h1>,
  }
 ]);
 function App() {
  return (
    <>
      <Header/>
      <RouterProvider router ={router} />
      
    </>
  );
 }


// function App() {
//   return (
//   <div className="App">
//     <Header/>
//     <Footer/>

//   </div>
//   )
//   ;
// }

export default App;
