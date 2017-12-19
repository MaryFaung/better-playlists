import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color:'#ccc'
};
class Aggregate extends Component{
  render() {
    return(
      <div style={{...defaultStyle,width:'40%',display:'inline-block','font-size':'12px'}}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render() {
    return(
      <div>
      <img alt=""/>
      <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component{
  render() {
    return(
      <div style={{...defaultStyle,width:'30%',display:'inline-block'}}>
      <h2>playlist</h2>
      <ul>
        <li>song1</li>
        <li>song2</li>
        <li>song3</li>
      </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    let name = 'title'
    let headerStyle = {...defaultStyle, 'font-size':'50px' }
    return (
      <div className="App">
          <h1 style={headerStyle}>{name}</h1>
          <Aggregate/>
          <Aggregate/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
      </div>
    );
  }
}

export default App;
