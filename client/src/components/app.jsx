import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
import NavBar from './navbar';
import BlogInput from './blogInput';
import BlogList from './blogList';


class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    {/* <Link to="/goodbye">Goodbye</Link>
                    <AuthButton /> */}
                    <NavBar /> 
                    
                    <Switch>
                        <Route exact path="/" component={HelloWorld} />
                        <Route exact path="/newPost" component={BlogInput} />
                        <Route exact path="/blogs" component={BlogList} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <PrivateRoute path="/goodbye" component={GoodbyeWorld} />
                        <PrivateRoute path="/admin" component={GoodbyeWorld} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;