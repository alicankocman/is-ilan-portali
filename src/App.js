import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IlanList from './components/IlanList';
import JobDetail from './components/JobDetail';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <div className="App">
        <h1>İş İlan Portalı</h1>
        <div className="header">
          <div className="arama_kutusu">
            <input
              type="text"
              placeholder="İş İlanı Arayın"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button id="arama_butonu">Ara</button>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<IlanList searchTerm={searchTerm} />} />
          <Route path="/job/:jobId" element={<JobDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
