import { store } from '../../store';
import './style.css'
import * as React from 'react';
export const LevelSelect = (props) => {
    return (
        <select onChange={e => props.onSelect(e.target.value)}>
            {store.buildings[props.building_id].levels.map(level_id =>
                <option value={level_id}>{store.levels[level_id].title}</option>)}
        </select>
    );
};