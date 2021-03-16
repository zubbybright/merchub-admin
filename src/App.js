import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import NotLoggedInRoute from './containers/NotLoggedInRoute';
import LoggedInRoute from './containers/LoggedInRoute';

function App() {
  return (
    <Router>
      <Switch>
      <NotLoggedInRoute path="/" exact Component={Login} />
      <LoggedInRoute path="/dashboard" Component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
