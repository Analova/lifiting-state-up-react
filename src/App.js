import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ComponentA />
      </div>
    );
  }
}

class ComponentA extends Component {
  constructor(props){
    super(props)
    this.state={
      x: 0
    }
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      x: this.state.x +1
    })
  }

  render(){
    return(
      <div style={{border: "1px solid black", margin: "20px", padding: "20px" }}>
        <h1>Component A</h1>
        this.state.x = {this.state.x}
        <br />
        this.handleClick => {"this.setState({x: this.state.x +1})"}
        <br />
        <ComponentB x={this.state.x} onXClick={this.handleClick}/>
        <ComponentD x={this.state.x} onXClick={this.handleClick}/>

      </div>
    )
  }

}

class ComponentB extends Component {
  render(){
    return(
      <div style={{border: "1px solid black", margin: "20px", padding: "20px" }}>
        <h1>Componet B</h1>
        <p>this.props.x = {this.props.x}</p>
        <div className="C">
        <ComponentC x={this.props.x} onMyClick={this.props.onXClick}/>
        </div>
        
      </div>
    )
  }

}

class ComponentC extends Component {
  render(){
    return(
      <div style={{border: "1px solid black", margin: "20px", padding: "20px" }}>
        <h1>Componet C</h1>
        <p>this.props.x = {this.props.x}</p>
        <button onClick={this.props.onMyClick}>{this.props.x}</button>
      </div>
    )
  }

}

class ComponentD extends Component {
  render(){
    return(
      <div style={{border: "1px solid black", margin: "20px", padding: "20px" }}>
        <h1>Component D</h1>
        <p>this.props.x = {this.props.x}</p>
        <button onClick={this.props.onXClick}>{this.props.x}</button>
      </div>
    )
  }

}



export default App;
