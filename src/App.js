import './App.css';
import { AppHeader } from './components/AppHeader';
import React from 'react';
import { LightList } from './components/LightList';
import { AppFooter } from './components/AppFooter';
import { MembersNames } from './components/MembersNames';


function App() {
  
  
  return (
    <main>
      <AppHeader />
      <div className="content">
        <LightList />
        <MembersNames />
      </div>
      <AppFooter />
    </main>
  );
}

export default App;
