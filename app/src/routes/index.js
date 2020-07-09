import React from "react";
import InsideRoutes from "./routes.app";
import AuthRoutes from "./routes.auth";
import AuthContext from "../contexts/auth";

const Routes = () => {
  const { signed } = React.useContext(AuthContext);

  return signed ? <InsideRoutes /> : <AuthRoutes />;
};

export default Routes;
