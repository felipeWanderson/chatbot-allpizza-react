import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {
    render(){
        return (
            <div className='home' >
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <br />
                <Button color="danger">Danger!</Button>
            </div>
        )
    }
}

export default Home