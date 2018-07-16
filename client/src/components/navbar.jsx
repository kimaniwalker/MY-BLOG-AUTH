import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AuthButton from './auth/authButton';

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <nav className="navbar-fluid sticky-top navbar-light bg-primary">
                    <div className="ContainerLink">
                        <div className="container">
                            <div className="row">
                            
                           
                                <div className="col-1">
                                    <Link className="text-white" to="/">Home</Link>
                                </div>
                                <div className="col-1">
                                    <Link className="text-white" to="/goodbye">Goodbye</Link>
                                </div>
                                <div className="col-9">
                                
                                </div>
                                <div className="col-1">
                                <AuthButton />
                                </div>

                                

                            </div>


                        </div>









                    </div>







                </nav>
            </div>
        );
    }
}

export default NavBar;