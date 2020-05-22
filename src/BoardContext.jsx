import React, { Component } from 'react'

class BoardContext extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brightTheme:true,
            lightMode: {fontColor:"#5c5c5c", backgroundMode: "#dbdbdb", buttonMode:"#a3a3a3"},
            darkMode: {fontColor:"#dbdbdb", backgroundMode:"#5c5c5c", buttonMode:"#5c5858"}
        }
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export const BoardContext = React.createContext()
