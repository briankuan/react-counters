import React from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}
