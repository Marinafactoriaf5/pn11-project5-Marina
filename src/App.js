import React from 'react'
import './App.css';
import Menu from './components/Menu.js';
import Hero from './components/Hero.js';
import Catalog from './components/Catalog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <Catalog />
      <Footer />
    </div>
  );
}
export default App;




