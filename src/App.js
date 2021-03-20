import React, { useEffect} from 'react';
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
import ProductManagement from './components/ProductManagement';
import { fetchCategories} from './components/agents/api';
import { categoriesFetch } from './redux/actions';
import { useDispatch } from 'react-redux';
import ViewProduct from './components/ViewProduct';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchAllCategories() {
        try {
            let categories = await fetchCategories();
            dispatch(categoriesFetch(categories));
        }
        catch (error) {
            console.log(error);
        }
    }
    fetchAllCategories()
  }, [dispatch]);
  return (
    <Router>
      <Switch>
      <NotLoggedInRoute path="/" exact Component={Login} />
      <LoggedInRoute path="/dashboard" Component={Dashboard} />
      <LoggedInRoute path="/products" Component={ProductManagement} />
      <LoggedInRoute path="/:id" Component={ViewProduct} />
      </Switch>
    </Router>
  );
}

export default App;
