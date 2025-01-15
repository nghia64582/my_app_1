import logo from './logo.svg';
import './App.css';
import React from 'react';
import SearchBar from './components/SearchBar';
import VoiceRecorder from './components/VoiceRecorder'
import WordCard from './components/WordCard';
import WordCardPane from './components/WordCardPane';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <VoiceRecorder/>
        <WordCardPane/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
