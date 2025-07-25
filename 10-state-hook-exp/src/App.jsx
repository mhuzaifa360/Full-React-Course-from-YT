import Counter from './counter';
import './App.css';
import { useState } from 'react';

import React from 'react'
import ToogleLight from './Toogle-light';
import TrafficSignal from './Traffic-signal-app';
import TextChanger from './TextChanger';

function App() {
  return (
    <div>
      <h1>this is app file</h1>
      <Counter />
      <ToogleLight />
      <TrafficSignal />
      <TextChanger />
    </div>
  )
}

export default App
