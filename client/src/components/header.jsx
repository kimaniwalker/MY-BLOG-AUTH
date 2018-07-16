import React, { Component } from 'react';
import { render } from 'react-dom';
import headerbg from '../images/bgHeader.jpg';


class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container-fluid" className="bg-danger">
                    
                        <img src={headerbg} bg-cover />
                    

                </div>

            </div>
        );

    }
}

export default Header;