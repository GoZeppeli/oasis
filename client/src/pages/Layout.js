import Menu from "../Menu";
import {Outlet} from "react-router-dom";

export default function Layout() {
  return (
    <main>
      <Menu />
      <Outlet />
    </main>
  );
}