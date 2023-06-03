import { useEffect, useState } from 'react';
import './App.css';
import { AppHeader } from './components/appHeader';
import { LightControls } from './components/lightControls';
import { io } from 'socket.io-client';
import React from 'react';

let socket = io("https://fadobe.up.railway.app");

function extractLightData (lights) {
  return lights.reduce((acc, light) => {
    acc[light._id] = light;
    return acc;
  }, {});
}


function App() {
  
  function toggleLight(id) {
    socket.emit("toggleLight", { id })
  }

  function setNewLightData (lightData) {
    let data = extractLightData(lightData);
    setLights(data);
  }

  let [lights, setLights] = useState({})

  useEffect(() => {
    socket.on("connection", lights => setNewLightData(lights));

    socket.on("onLightToggled", lights => setNewLightData(lights));

    return () => {
      socket.off("connection");
      socket.off("onLightToggled");
    }
  }, []);
  
  return (
    <main>
      <AppHeader />
      <div className = "content">
        {
          Object.values(lights).map((light, key)=> (
              <React.Fragment key={key}>
                <LightControls 
                  lightData={light}
                  toggle={toggleLight}
                />
              </React.Fragment>
          ))
        }
      </div>
    </main>
  );
}

export default App;
