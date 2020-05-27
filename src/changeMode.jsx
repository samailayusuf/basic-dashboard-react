import React, {Component} from 'react';
import {BoardContext} from './BoardContext';

class ChangeMode extends Component{
    static contextType = BoardContext

    render(){
        const {changeMode} = this.context
        return (
    
                <button className="btn btn-primary" onClick={changeMode}>Theme Mode</button>
        
        )

    }

}


export default ChangeMode;
