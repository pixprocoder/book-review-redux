import { Spinner } from "@chakra-ui/react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks/hooks";

const PrivateRoute = ({ children }: any) => {
  const { user, isLoading } = useAppSelector((state) => state.auth);

  const { pathname } = useLocation();

  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );

  if (!user.email && !isLoading)
    return <Navigate to="/login" state={{ path: pathname }} />;

  return children;
};

export default PrivateRoute;
