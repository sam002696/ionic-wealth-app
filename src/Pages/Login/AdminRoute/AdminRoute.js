import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import useAuthContexts from "../../../Hooks/Firebase/useAuthContexts";
import PreLoader from "../../Shared/PreLoader/PreLoader";

const AdminRoute = ({ children, ...rest }) => {
  const [singleuser, setSingleUser] = useState({});
  const { user, isLoading, token } = useAuthContexts();
  console.log(user);

  useEffect(() => {
    const url = `https://ionic-wealth-app-server-production.up.railway.app/users/${user?.email}`;
    axios
      .get(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data?.admin) {
          setSingleUser(res.data?.admin);
          console.log(res.data?.admin);
        } else {
          setSingleUser(null);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.email, token]);

  console.log(singleuser);
  if (isLoading) {
    return <PreLoader />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && singleuser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
