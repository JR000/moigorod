import './style.css'
import * as React from 'react';
import { store } from '../../store';
import { useNavigate } from 'react-router';

export const BuildingSelect = (props) => {
    
    
    return (
        <select onChange={(e) => props.onSelect(e.target.value)}>
            {Object.keys(store.buildings).map(id => {
                return <option
                    value={id} 
                    selected={props.building_id == id}
                    >{store.buildings[id].title}</option>
            })}
        </select>


        // <div className="bs-dropdown">
        //     <div className='bs-select'>
        //         <span className='bs-selected'>
        //         {store.buildings[props.building_id].title}
        //         </span>
        //         <div className='bs-caret'></div>
        //     </div>
        //     <ul className='bs-menu'>
        //         {Object.keys(store.buildings).map(id => {

        //             return (
        //             <li>
        //                 {store.buildings[id].title}
        //             </li>)


        //         })}
        //     </ul>
        // </div>

    )
};