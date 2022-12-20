import { Navigate } from "react-router-dom";
import Roles from "../enums/Enums";
import GetAuthorization from "../functions/SetAuthorization";

export const ProtectedAdminRoute = ({ children }) => {
  const authorization = GetAuthorization();
  authorization.array.forEach(element => {
    switch (element) {
      case Roles.Admin:
        return <Navigate to="/access_denied" />;
    }
  });

  return children;
};