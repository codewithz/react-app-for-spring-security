import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [notice, setNotice] = useState({ noticeId: '', noticeTitle: '' });

  useEffect(() => {
    fetch('http://localhost:8080/notices')
      .then(response => response.json())
      .then(data => {
        setNotice(data);
      })
      .catch(error => {
        console.error('Error fetching the notice:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notice</h1>
        <p>Notice ID: {notice.noticeId}</p>
        <p>Notice Title: {notice.noticeTitle}</p>
      </header>
    </div>
  );
}

export default App;
