import React from "react";
import InsideRoutes from "./routes.app";
import AuthRoutes from "./routes.auth";
import NewPasswordRoute from './routes.pass';
import AuthContext from "../contexts/auth";

const Routes = () => {
  const { signed, statusDoador } = React.useContext(AuthContext);

  return signed ? statusDoador === 1 ? <NewPasswordRoute /> : <InsideRoutes /> : <AuthRoutes />;
};

export default Routes;
