import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./pages/Layout";
import Index from "./pages/Index";


const router = createBrowserRouter([
  {
    element: <Layout/>, 
    children: [
      { path: "/", Component: Index},
    ]
  }
]);


export default function App() {
  return <RouterProvider router={router} />;
}