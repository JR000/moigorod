import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { store } from '../../store';
import './style.css'
import { BuildingSelect } from '../BuildingSelect/BuildingSelect';
import { LevelSelect } from '../LevelSelect/LevelSelect';
import { RectangularOfficeSelector } from '../RectangularOfficeSelector/RectangularOfficeSelector';
import { MapSelector } from '../MapSelector/MapSelector';

export const BuildingMap = observer((props) => {

    const { building_id } = useParams()
    if (!(building_id in store.buildings))
        return (<>There is no such building</>)

    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate()

    function setLevel(n) {
        navigate(
            `/buildings/${building_id}/map?level=${n}`,
        )

    }

    const level_index = searchParams.get('level')

    if (!level_index) {
        setLevel(0)
    }
    if (level_index < 0 || level_index > store.buildings[building_id].levels.length) {
        setLevel(0)
    }

    return (
        <>
            <div class="building-map-cols-container">
                <div class="left-col">
                    <BuildingSelect building_id={building_id} onSelect={(id) => navigate(`/buildings/${id}/map`)} />
                    <LevelSelect building_id={building_id} level={store.buildings[building_id].levels[level_index]} onSelect={(id) => setLevel(store.buildings[building_id].levels.indexOf(id))} />

                    <br />
                    {/* <RectangularOfficeSelector level_id={store.buildings[building_id].levels[level_index]} /> */}
                </div>
                <div class="right-col">
                    <MapSelector level_id={store.buildings[building_id].levels[level_index]} />
                </div>
            </div>
        </>
    );
});