import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";
import { Container } from "@chakra-ui/react";
import Footer from "../pages/shared/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <Container maxW="container.xl">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default MainLayout;
