import { Container } from "@chakra-ui/react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import auth from "../firebase/firebase.init";
import Footer from "../pages/shared/Footer";
import Header from "../pages/shared/Header";
import { useAppDispatch } from "../redux/hooks/hooks";
import { setLoading, setUser } from "../redux/features/auth/authSlice";

function MainLayout() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));

    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      if (loggedInUser?.email) {
        dispatch(setUser(loggedInUser.email));
        dispatch(setLoading(false));
      } else {
        setLoading(false);
      }

      return () => unsubscribe();
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
