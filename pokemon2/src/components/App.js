import React, { Component } from 'react';
import gyaradosData from '../json/gyarados.json';
import gyaradosDescription from '../json/gyaradosDescription.json';
import Monster from './Monster.js';
import '../css/App.css';

class App extends Component {

  render() {
    
    return (
      <div className="App">
      	<Monster monsterData={gyaradosData} monsterDescription={gyaradosDescription}/>
      </div>
    );

  }
}

export default App;
