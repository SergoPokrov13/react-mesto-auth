import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Logged from "../Logged/Logged";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useEffect, useState } from "react";
import apiAuth from "../../utils/ApiAuth";
import { useHistory } from "react-router-dom";
import { NameContext } from "../../contexts/CurrentUserContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginUser, setLoginUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    tokenCheck();
  }, []);

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleExit() {
    localStorage.removeItem("token");
    history.push("/sign-in");
  }

  function tokenCheck() {
    if (localStorage.getItem("token")) {
      const jwt = JSON.parse(localStorage.getItem("token"));
      console.log(jwt)
      if (jwt.token) {
        apiAuth.getUser(jwt.token).then((data) => {
          if (data) {
            setLoginUser(data);
            handleLogin();
            history.push("/");
          }
        });
      }
    }
  }

  return (
    <div className="App">
      <div className="root">
        <NameContext.Provider value={loginUser}>
          <Header loggedIn={loggedIn} logOut={handleExit} />
        </NameContext.Provider>
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            loggedIn={loggedIn}
            component={Logged}
          />
          <Route path="/sign-in">
            <Login tokenCheck={tokenCheck} />
          </Route>
          <Route path="/sign-up">
            <Register />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
