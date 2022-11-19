import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Logged from '../Logged/Logged';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Login from '../Login/Login';
import Register from '../Register/Register';


function App() {
  let loggedIn = true;
  return (
    <div className="App">
      <div className="root">
          <Header/>
          <Switch>
          <ProtectedRoute exact path="/" loggedIn={loggedIn} component = {Logged}/>
            <Route path="/sign-in">
              <Login />
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
