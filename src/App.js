import { useState } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Images from './components/Images';
import SearchBox from './components/SearchBox';

function App() {
  const [input, setInput] = useState('')
  return (
    <div className="App">
      <div className="App-header">
      <center>
      <SearchBox input={input} setInput={setInput}/>
      <Gallery query={input}/>
      </center>
      </div>
    </div>
  );
}

export default App;
