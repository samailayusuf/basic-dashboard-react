import React, { Component } from 'react';
import Board from './Board'
import "bootstrap/dist/css/bootstrap.min.css/"
class App extends Component {
    render() { 
        return ( 
            <div>
                <Nav/>
                <Board />
            </div>
         );
    }
}
export default App;