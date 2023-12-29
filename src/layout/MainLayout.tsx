import { Container } from "@chakra-ui/react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import auth from "../firebase/firebase.init";
import Footer from "../pages/shared/Footer";
import Header from "../pages/shared/Header";

function MainLayout() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      if (loggedInUser) {
        // setUser(loggedInUser);
      }

      return () => unsubscribe();
    });
  });

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
