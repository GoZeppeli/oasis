import './App.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./pages/Layout";
import Index from "./pages/Index";
import Pages from "./pages/Pages";
import Protect from "./pages/Protect";


const router = createHashRouter([
  {
    element: <Layout/>, 
    children: [
      { path: "/", Component: Index},
      { path: "/page/:id", Component: Pages},
      { path: "/protect", Component: Protect},
    ]
  }
]);


export default function App() {
  return <RouterProvider router={router} />;
}