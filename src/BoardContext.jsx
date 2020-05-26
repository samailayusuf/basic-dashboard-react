import React, { Component } from 'react'
export const BoardContext = React.createContext();

class BoardContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brightTheme:true,
            lightMode: {fontColor:"#5c5c5c", backgroundMode: "#dbdbdb", buttonMode:"#a3a3a3", body:"#ffffff"},
            darkMode: {fontColor:"#dbdbdb", backgroundMode:"#5c5c5c", buttonMode:"#5c5858", body:"#121212"}
        }
        //this.changeMode = this.changeMode.bind(this);
    }

    changeMode = () =>{
        this.setState({
            brightTheme : !this.state.brightTheme
        })
    }

    render() {
        return (
            <div>
                 <BoardContext.Provider value={{...this.state, changeMode:this.changeMode}}>
                    {this.props.children}
                </BoardContext.Provider>
            </div>
        )
    }
}

export default BoardContextProvider;