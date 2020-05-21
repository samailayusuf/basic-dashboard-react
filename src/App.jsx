import React, { Component } from 'react';
import Board from './Board'
import Nav from './Nav'
import Footer from './Footer'
import "bootstrap/dist/css/bootstrap.min.css/"
class App extends Component {
    render() { 
        return ( 
            <div>
                <Nav/>
                <Board />
                <Footer/>
            </div>
         );
    }
}
export default App;