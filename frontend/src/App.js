import React from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [serverStatus, setServerStatus] = React.useState('');

  React.useEffect(() => {
    const checkServer = async () => {
      try {
        const response = await axios.get('http://localhost:5000');
        setServerStatus(response.data);
      } catch (error) {
        setServerStatus('Server connection failed');
      }
    };

    checkServer();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ApplyWing</h1>
        <p>{serverStatus}</p>
      </header>
    </div>
  );
}

export default App;
