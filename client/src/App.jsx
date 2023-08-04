import { useEffect } from 'react';
import './style.css'
import { Route, Routes } from 'react-router';
import { BuildingMap } from './components/BuildingMap/BuildingMap';
export const App = () => {
    useEffect(() => {
      // load the data for the first time
    }, [])
    
    return (
      <div className='main-container'>
        <div>Here goes the header</div>
        <Routes>
          <Route path="/" element={<div>/</div>} />
          <Route path="/buildings" element={<div>/buildings</div>} />
          <Route path="/buildings/:building_id/map" element={<BuildingMap/>}/>
        </Routes>
      </div>
    );
  };