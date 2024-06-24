import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchMessage = () => {
    fetch('http://127.0.0.1:5000/api/name')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
      })
      .catch(error => {
        console.error("There was an error fetching the message!", error);
      });
  };

  const handleChangeName = () => {
    fetch('http://127.0.0.1:5000/api/name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          fetchMessage();
        }
      })
      .catch(error => {
        console.error("There was an error setting the name!", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a new name"
        />
        <button onClick={handleChangeName}>Change Name</button>
        <p>Note: Restarting the server will reset the name to "World".</p>
      </header>
    </div>
  );
}

export default App;
