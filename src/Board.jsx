import React, { Component } from 'react';
import './index.css'
class Board extends Component {
    constructor(){
        super()
        this.state = {
            butterQuatity:67,
            butterPrice:455,
            sugarCrates:44,
            isLoggedIn:true,
            oil:600,
            egg:100,
            flavor:900

        }
    }

    incrementButterQty = () => {
        this.setState({
            butterQuatity : this.state.butterQuatity + 1
        })
    }

    incrementButterPrice = () => {
        this.setState({
            butterPrice : this.state.butterPrice + 1
        })
    }

    incrementSugarCrate = () => {
        this.setState({
            sugarCrates : this.state.sugarCrates + 1
        })
    }

    incrementOil = () =>{
        this.setState({oil: this.state.oil + 1})
    }

    incrementEgg = () => {
        this.setState({egg: this.state.egg + 1})
    }

    incrementFlavor = () =>{
        this.setState({flavor:this.state.flavor + 1})
    }





    decrementButterQty = () => {
        this.setState({
            butterQuatity : this.state.butterQuatity - 1
        })
    }

    decrementButterPrice = () => {
        this.setState({
            butterPrice : this.state.butterPrice - 1
        })
    }

    decrementSugarCrate = () => {
        this.setState({
            sugarCrates : this.state.sugarCrates - 1
        })
    }

    decrementOil = () =>{
        this.setState({oil: this.state.oil - 1})
    }

    decrementEgg = () => {
        this.setState({egg: this.state.egg - 1})
    }

    decrementFlavor = () =>{
        this.setState({flavor:this.state.flavor - 1})
    }


    render() { 
        return ( 
            <div >
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-4">
                            <div className="card shadow  mb-3 rounded" style={{width:300 ,}}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">The Quantity Of Butter</h5>
                                    <p className="card-text text-center">{this.state.butterQuatity}</p>
                                    <button className="butterButton1" onClick={this.incrementButterQty}>Update Quantity</button>
                                    <button className="butterButton2" onClick={this.decrementButterQty}>Delete Value</button>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-4">
                            <div className="card shadow  mb-3 rounded" style={{width:300 ,}}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">The Price Of Butter</h5>
                                    <p className="card-text text-center">{this.state.butterPrice}</p>
                                    <button className="butterButton1" onClick={this.incrementButterPrice}>Update Price</button>
                                    <button className="butterButton2" onClick={this.decrementButterPrice}>Delete Value</button>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-4">
                            <div className="card shadow  mb-3 rounded" style={{width:300 ,}}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">The Quantity Of Crates</h5>
                                    <p className="card-text text-center">{this.state.sugarCrates}</p>
                                    <button className="butterButton1" onClick={this.incrementSugarCrate}>Update Crates</button>
                                    <button className="butterButton2" onClick={this.decrementSugarCrate}>Delete Value</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-sm-4">
                            <div className="card shadow  mb-3 rounded" style={{width:300 ,}}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Flavor</h5>
                                    <p className="card-text text-center">{this.state.flavor}</p>
                                    <button className="butterButton1" onClick={this.incrementFlavor}>Update Flavor</button>
                                    <button className="butterButton2" onClick={this.decrementFlavor}>Delete Value</button>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-4">
                            <div className="card shadow  mb-3 rounded" style={{width:300 ,}}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Oil</h5>
                                    <p className="card-text text-center">{this.state.oil}</p>
                                    <button className="butterButton1" onClick={this.incrementOil}>Update Oil</button>
                                    <button className="butterButton2" onClick={this.decrementOil}>Delete Value</button>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-4">
                            <div className="card shadow  mb-3 rounded" style={{width:300 ,}}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Eggs</h5>
                                    <p className="card-text text-center">{this.state.egg}</p>
                                    <button className="butterButton1" onClick={this.incrementEgg}>Update Eggs</button>
                                    <button className="butterButton2" onClick={this.decrementEgg}>Delete Value</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
         );
    }
}
export default Board;