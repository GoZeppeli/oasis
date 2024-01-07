import './App.css';
import './index.css';
import './page.css';
import './other.css';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./pages/Layout";
import Index from "./pages/Index";
import Pages from "./pages/Pages";
import Protect from "./pages/Protect";
import Browse from "./pages/Browse";
import About from "./pages/About";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";


const router = createHashRouter([
  {
    element: <Layout/>, 
    children: [
      { path: "/", Component: Index},
      { path: "/page/:id", Component: Pages},
      { path: "/protect", Component: Protect},
      { path: "/browse", Component: Browse},
      { path: "/about-us", Component: About},
      { path: "/donate", Component: Donate},
      { path: '*', Component: NotFound }
    ]
  }
]);


export default function App() {
  return <RouterProvider router={router} />;
}