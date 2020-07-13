import React from "react";
import InsideRoutes from "./routes.app";
import AuthRoutes from "./routes.auth";
import NewPasswordRoute from './routes.pass';
import AuthContext from "../contexts/auth";

const Routes = () => {
  const { signed } = React.useContext(AuthContext);

  return signed ? <NewPasswordRoute /> : <AuthRoutes />;
};

export default Routes;
