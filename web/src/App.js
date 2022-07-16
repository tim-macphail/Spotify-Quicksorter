import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import OAuth from './OAuth';

function App() {

  const handleClick = () => {
    // get available devices
    axios.get(`https://api.spotify.com/v1/me/player/devices`, {
      headers: {
        'Authorization': 'Bearer ' + OAuth
      }
    }).then(res => {
      const devices = res.data.devices;
      for (let i = 0; i < devices.length; i++) {
        console.log({ name: devices[i].name, id: devices[i].id });
      }
    }
    ).catch(err => {
      if (err.status === 429) {
        console.log("Too many requests");
      } else if (err.status === 401) {
        console.log("Unauthorized");
      }
      console.log(err);
    }
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick} >Get devices</button>
      </header>
    </div>
  );
}

export default App;
