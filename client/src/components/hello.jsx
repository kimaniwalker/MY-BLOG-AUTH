import React, { Component } from 'react';
import { render } from 'react-dom';

class HelloWorld extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container-fluid" className="bg-danger">
                    
                        <h1>Hello World!</h1>
                    

                </div>

            </div>
        );

    }
}

export default HelloWorld;