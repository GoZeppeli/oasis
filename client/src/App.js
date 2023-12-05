import './App.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./pages/Layout";
import Index from "./pages/Index";
import Pages from "./pages/Pages";


const router = createHashRouter([
  {
    element: <Layout/>, 
    children: [
      { path: "/", Component: Index},
      { path: "/page/:id", Component: Pages},
    ]
  }
]);


export default function App() {
  return <RouterProvider router={router} />;
}