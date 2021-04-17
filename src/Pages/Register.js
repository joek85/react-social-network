import React, {Component} from 'react';
import '../css/Login.css'
class Register extends Component {
    render() {
        return (
            <div className="main-content bg-secondary text-center">
                <div className="col-md-4 text-center company__info">
                    <h4 className="company_title">Social Network</h4>
                </div>
                <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
                    <div className="container-fluid">
                        <h2 className="text-secondary">Register for free</h2>
                        <form className="form-group">
                            <input type="text" name="username" id="username" className="form__input" placeholder="Company name"/>
                            <input type="text" name="password" id="password" className="form__input" placeholder="Email address"/>
                            <div className="d-flex justify-content-between">
                                <input type="text" name="password" id="password" className="form__input me-4" placeholder="Password"/>
                                <input type="text" name="password" id="password" className="form__input" placeholder="Confirm password"/>
                            </div>
                            <div className="d-flex">
                                <input type="checkbox" name="remember_me" id="remember_me" className="me-2"/>
                                    <label for="remember_me"> I Read and Accept <a href="/">Terms and Conditions</a></label>
                            </div>
                            <div className="text-center">
                                <input type="submit" value="Register" className="btn-login"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
