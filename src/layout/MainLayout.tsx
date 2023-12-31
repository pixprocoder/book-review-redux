import { Container } from "@chakra-ui/react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import auth from "../firebase/firebase.init";
import Header from "../pages/shared/Header";
import { setLoading, setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks/hooks";
import Footer from "../pages/shared/Footer";

function MainLayout() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (loggedInUser) => {
      if (loggedInUser?.email) {
        dispatch(setUser(loggedInUser.email));
        dispatch(setLoading(false));
      } else {
        setLoading(false);
      }
    });
  }, []);

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
