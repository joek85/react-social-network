import './App.css';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import UserProfile from './Pages/UserProfile'
import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-secondary mb-3">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="logo192.png" alt="" width="30" height="30" className="me-1 d-inline-block" />
                    Social Network
                </a>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/">Action</a>
                        <a className="dropdown-item" href="/">Another action</a>
                        <a className="dropdown-item" href="/">Something else here</a>
                    </div>
                </div>
            </div>
        </nav>
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="container">
                        <Login/>
                    </div>
                </Route>
                <Route path="/register">
                    <div className="container">
                        <Register/>
                    </div>
                </Route>
                <Route path="/feed">
                    <div className="container">
                        <Home/>
                    </div>
                </Route>
                <Route path="/userprofile">
                    <UserProfile/>
                </Route>
            </Switch>
        </Router>

    </div>
  );
}

export default App;
