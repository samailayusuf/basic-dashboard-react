import React, {Component} from 'react';
import {BoardContext} from './BoardContext';

class ChangeMode extends Component{
    static contextType = BoardContext

    render(){
        const {changeMode} = this.context
        return (
    
                <button onClick={changeMode}>Theme Mode</button>
        
        )

    }

}


export default ChangeMode;
