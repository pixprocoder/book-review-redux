import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default MainLayout;
