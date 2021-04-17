import React, {Component} from 'react';
import '../css/Login.css'
import {Link} from "react-router-dom";
class Login extends Component {
    render() {
        return (
            <div className="main-content bg-secondary text-center">
                <div className="col-md-4 text-center company__info">
                    <h4 className="company_title">Social Network</h4>
                </div>
                <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                    <div className="container-fluid">
                        <h2 className="text-secondary">Log In</h2>
                        <form className="form-group">
                                <input type="text" name="username" id="username" className="form__input" placeholder="Username"/>
                                <input type="password" name="password" id="password" className="form__input" placeholder="Password"/>
                            <div className="d-flex">
                                <input type="checkbox" name="remember_me" id="remember_me"/>
                                    <label for="remember_me">Remember Me!</label>
                            </div>
                            <div className="text-center">
                                <input type="submit" value="Login" className="btn-login"/>
                            </div>
                        </form>
                        <p>Don't have an account? <Link to="/register">Register Here</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
