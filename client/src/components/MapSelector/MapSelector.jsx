import './style.css'
import { store } from '../../store';

import Background from './building-map.png'

// @flow 
import * as React from 'react';
// type Props = {
//     image_src: String,
//     level_id: String
// };
export const MapSelector = (props) => {
    function getDraw(map) {
        let result = `M ${map[0]} ${map[1]} `
        for (let i = 2; i < map.length; i += 2) {
            result += `L ${map[i]} ${map[i + 1]} `
        }
        return result
    }

    if (!props.level_id)
        return null;
    const [w, h] = store.levels[props.level_id].img.dimensions
    return (
        
        <div className="right-col-flex-wrapper">
            <div className="right-col-container">
                <img className="img" src={Background} alt="" />
                <svg className='svg'
                    viewBox={`0 0 ${w} ${h}`}
                >
                    {store.levels[props.level_id].offices.map(office_id => {


                        return (
                            <>
                                <path
                                    stroke={store.levels[props.level_id].img.stroke}
                                    d={getDraw(store.offices[office_id].border_map)}
                                >
                                    <rect width={10} height={10} x={10} y={10} fill={'#fff'} />
                                </path>
                            </>

                        )

                    })}
                </svg>
            </div>
        </div>
    );
};