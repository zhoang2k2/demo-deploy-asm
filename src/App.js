import './App.css'

import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./components/Home";
import CreateEmployee from './components/CreateEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import EmployeeList from './components/EmployeeList';

import firebaseApp from './firebase';
import { getFirestore } from "firebase/firestore";


function App(props) {
  const db = getFirestore(firebaseApp);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/employees">Employee List</Link>
          </li>
          <li>
            <Link to="/createemployee">Create Employee</Link>
          </li>
          <li>
            <Link to="/deleteemployee">Delete Employee</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/employees">
          <EmployeeList db={db} />
        </Route>
        <Route path="/createemployee" component={CreateEmployee} exact />
        <Route path="/deleteemployee" component={DeleteEmployee} exact />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;



