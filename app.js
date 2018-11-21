import React, { Component } from 'react';
import types from './types.json';
import './app.css';

import FireRealm from './firerealm.js';
import Test1 from './test1.js';
import Test2 from './test2.js';
import Test3 from './test3.js';
import Anka from './anka.js';



class TypeApp extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: null
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(input) {
    console.log(input.target.id);
    this.setState({
      selected: input.target.id
    })
  };

  
  render() {
    const test = <FireRealm />;
    const test1 = <Test1 />;
    const test2 = <Test2 />;
    const test3 = <Test3 />;
    const anka = <Anka />;
    if (this.state.selected === "plus") {
      return test;
    }
    else if (this.state.selected === "minus") {
      return test1;
    }
    else if (this.state.selected === "mult") {
      return test2;
    }
    else if (this.state.selected === "division") {
      return test3;
    }
    else if (this.state.selected === "donald") {
      return anka;
    }



    //const tests = <Test ={this.state.selected}/>;

    return(
      <div className="wrapper">

        <div id="header">
          <img id="donald" src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Donald_Duck.svg/220px-Donald_Duck.svg.png" onClick={this.handleClick}/>
          <div id="arrowLeft"></div>
          <div id="bubble">
            <p id="welcome"> Välkommen hit, skoj </p>
          </div>
        </div>

        <button id="plus" className="ruta" onClick={this.handleClick}> +
        </button>
        <button id="minus" className="ruta" onClick={this.handleClick}> - 
        </button>  
        <button id="mult" className="ruta" onClick={this.handleClick}> * 
        </button> 
        <button id="division" className="ruta" onClick={this.handleClick}> % 
        </button>

      </div>
    )
  }
}


export default TypeApp;