import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";
import { Container } from "@chakra-ui/react";

function MainLayout() {
  return (
    <>
      <Header />
      <Container maxW="container.xl">
        <Outlet />
      </Container>
    </>
  );
}

export default MainLayout;
