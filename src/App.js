import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'



class App extends React.Component {


  render() {
    return (
      <div className="outwrapper">
        <div className="App">
          <Navbar />
          <Main />
        </div>
        <div className="musicplayer">
          <span>music player</span>
        </div>
      </div>
    )
  }

}



export default App;
