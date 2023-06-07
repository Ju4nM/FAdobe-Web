import './App.css';
import React from 'react';
import { AppHeader } from './components/AppHeader';
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
