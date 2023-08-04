import { useEffect } from 'react';
import './style.css'
import { store } from '../../store';
import { observer } from 'mobx-react-lite';

export const RectangularOfficeSelector = observer((props) => {

    if (!props.level_id)
        return null;
    console.log(props.level_id)
    return (
        <div className='square-container'>
            {store.levels[props.level_id].offices.map(office_id => {
                const [x, y] = store.offices[office_id].square_coords
                return (<div
                    style={{
                        'left': `${x * 50}px`,
                        'top': `${y * 50}px`
                    }}
                    className={`square ${store.selectedOffice == office_id ?'square-selected' : ''} `}
                    onClick={() => store.setSelectedOffice(office_id)}
                    >
                        {office_id}
                    </div>
                )
            })}
        </div>
    );
});