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
                    {/*<img src="logo192.png" alt="" width="30" height="30" className="me-1 d-inline-block" />*/}
                    Social Network
                </a>
                <div className="btn-group justify-content-end">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="https://picsum.photos/200" className="me-2 rounded-circle" alt="Profile Image" style={{width: 32, height: 32}}/>Joe
                    </button>
                    <div className="dropdown-menu card-body text-center" style={{width: 300}}>
                        <div className="media d-flex my-2">
                            <img src="https://picsum.photos/200" className="mx-1 text-center rounded-circle" style={{width: 64, height: 64}} alt=""/>
                            <div className="media-body text-start ms-1">
                                <h5 className="mt-0 mb-0">Joe kaikaty</h5>
                                <p className="card-text"><small className="text-muted">Full Stack Developer</small></p>
                            </div>
                        </div>
                        <a href="/userprofile" className="btn btn-outline-secondary btn-sm">View Profile</a>
                        <div class="dropdown-header fw-bold text-start">Account</div>
                        <a class="dropdown-item text-start" href="/">Settings & Privacy</a>
                        <a class="dropdown-item text-start" href="/">Help</a>
                        <a class="dropdown-item text-start" href="/">Language</a>
                        <div class="dropdown-divider"/>
                        <div class="dropdown-header fw-bold text-start">Manage</div>
                        <a class="dropdown-item text-start" href="/">Posts & Activity</a>
                        <div class="dropdown-divider"/>
                        <a class="dropdown-item text-start" href="/">Logout</a>
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
