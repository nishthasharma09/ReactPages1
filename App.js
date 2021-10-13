import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Table from './pages/Table';
import Products from './pages/Products';
import BasicTable from './pages/BasicTable';
import Chart from "./pages/Chart";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
    <Route path='/' exact component={Home} />
          <Route path='/reports' component={Table} />
          <Route path='/products' component={Products} />
          <Route path='/team' component={BasicTable} />
          <Route path='/contact' component={Chart} />
          <Route path='/support' component={BasicTable} />

        </Switch>
      </Router>
    </>
  );
}

export default App;