import React, { Component } from 'react'
import Board from './Board'
import Nav from './Nav'
import Footer from './Footer'
import "bootstrap/dist/css/bootstrap.min.css/"
import BoardContextProvider from './BoardContext'

class App extends Component {
    render() { 
        return ( 
            <div>
                <BoardContextProvider>
                <Nav/>
                <Board />
                <Footer/>
                </BoardContextProvider>
            </div>
         );
    }
}
export default App;