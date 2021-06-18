import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,Route
} from "react-router-dom";

import LoggedInRoute from './containers/LoggedInRoute';
import ProductManagement from './components/ProductManager/ProductManagement';
import { fetchCategories } from './components/agents/api';
import { categoriesFetch } from './redux/actions';
import { useDispatch } from 'react-redux';
import ViewProduct from './components/ProductManager/ViewProduct';
import UploadProduct from './components/ProductManager/UploadProduct';
import EditProduct from './components/ProductManager/EditProduct';

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
        <Route path="/" exact component={Login} />
        <LoggedInRoute path="/dashboard" component={Dashboard} />
        <LoggedInRoute path="/products" component={ProductManagement} />
        <LoggedInRoute path="/upload" component={UploadProduct} />
        <LoggedInRoute path="/product/:prodId" component={ViewProduct} />
        <LoggedInRoute path ="/edit/:prodId" component={EditProduct}/>
      </Switch>
    </Router>
  );
}

export default App;
