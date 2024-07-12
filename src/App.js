import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IlanList from './components/IlanList';
import JobDetail from './components/JobDetail';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");



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
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">Tüm Konumlar</option>
              <option value="İstanbul, Türkiye">İstanbul</option>
              <option value="Ankara, Türkiye">Ankara</option>
              <option value="İzmir, Türkiye">İzmir</option>
              <option value="Bursa, Türkiye">Bursa</option>
              <option value="Antalya, Türkiye">Antalya</option>
              <option value="Adana, Türkiye">Adana</option>
              <option value="Gaziantep, Türkiye">Gaziantep</option>
              <option value="Konya, Türkiye">Konya</option>
              <option value="Kayseri, Türkiye">Kayseri</option>
              <option value="Samsun, Türkiye">Samsun</option>
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Tüm Kategoriler</option>
              <option value="Yazılım Geliştirme">Yazılım Geliştirme</option>
              <option value="Mobil Geliştirme">Mobil Geliştirme</option>
              <option value="Veri Bilimi">Veri Bilimi</option>
              <option value="Siber Güvenlik">Siber Güvenlik</option>
              <option value="Bulut Bilişim">Bulut Bilişim</option>
              <option value="Yapay Zeka">Yapay Zeka</option>
              <option value="Web Geliştirme">Web Geliştirme</option>
              <option value="Tasarım">Tasarım</option>
              <option value="Proje Yönetimi">Proje Yönetimi</option>
              <option value="DevOps">DevOps</option>
            </select>
            <button id="arama_butonu">Ara</button>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<IlanList searchTerm={searchTerm} location={selectedLocation} category={selectedCategory} />} />
          <Route path="/job/:jobId" element={<JobDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;