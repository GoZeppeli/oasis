import './App.css';
import './index.css';
import './page.css';
import './other.css';
import './refs.css';

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
import Test from "./pages/Test";
import Refs from "./pages/Refs";
import Maps from "./pages/Maps";
import Countries from "./pages/Countries";


const router = createHashRouter([
  {
    element: <Layout/>, 
    children: [
      { path: "/", Component: Index},
      { path: "/page/:id", Component: Pages},
      { path: "/countries/:code", Component: Countries},
      { path: "/protect", Component: Protect},
      { path: "/browse", Component: Browse},
      { path: "/about-us", Component: About},
      { path: "/donate", Component: Donate},
      { path: '*', Component: NotFound },
      { path: '/test', Component: Test },
      { path: '/references', Component: Refs },
      { path: '/maps', Component: Maps },
    ]
  }
]);


export default function App() {
  return <RouterProvider router={router} />;
}