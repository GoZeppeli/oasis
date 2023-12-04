import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./pages/Layout";
import Index from "./pages/Index";
import Pages from "./pages/Pages";


const router = createBrowserRouter([
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