import { useState } from 'react';

import DiscreteSliderSteps from '../../util/DiscreteSliderSteps';
import MultipleSelectChip from '../../util/MultipleSelectChip';
import Switch from '../../util/SwitchMaterial';
import SelectLabels from '../../util/SelectLabels';
import './Filter.scss';
const Filter = (props) => {
    const [playerCount, setPlayerCount] = useState(2);

    return (
        <details className="colapse">
            <summary>Show/Hide Filter</summary>

            <div className="filter">
                <h1 className="filter_header">FILTER</h1>
                <div className="filter__range">
                    <div className="filter__range-enable">
                        <Switch />
                        <div className="filter__range-description">{`Player count ${playerCount}`}</div>
                        <SelectLabels
                            selectAttr={[
                                { name: 'rec', value: 0 },
                                { name: 'best', value: 1 },
                                { name: 'box', value: 2 },
                            ]}
                        />

                        <DiscreteSliderSteps
                            className="filter__range-element"
                            min={1}
                            max={10}
                            defaultValue={2}
                            cb={(event, value) => {
                                setPlayerCount(value);
                            }}
                        />
                    </div>
                </div>
                <div className="filter__range">
                    <div className="filter__range-enable">
                        <Switch />
                        <div className="filter__range-description">{`Player count ${playerCount}`}</div>

                        <DiscreteSliderSteps
                            className="filter__range-element"
                            min={1}
                            max={10}
                            defaultValue={2}
                            cb={(event, value) => {
                                setPlayerCount(value);
                            }}
                        />
                    </div>
                </div>
                <div className="filter__range">
                    <div className="filter__range-enable">
                        <Switch />
                        <div className="filter__range-description">{`Player count ${playerCount}`}</div>

                        <DiscreteSliderSteps
                            className="filter__range-element"
                            min={1}
                            max={10}
                            defaultValue={2}
                            cb={(event, value) => {
                                setPlayerCount(value);
                            }}
                        />
                    </div>
                </div>
                <div className="filter__range">
                    <div className="filter__range-enable">
                        <Switch />
                        <div className="filter__range-description">{`Player count ${playerCount}`}</div>

                        <DiscreteSliderSteps
                            className="filter__range-element"
                            min={1}
                            max={10}
                            defaultValue={2}
                            cb={(event, value) => {
                                setPlayerCount(value);
                            }}
                        />
                    </div>
                </div>
                <div className="filter__range">
                    <div className="filter__range-enable">
                        <Switch />
                        <div className="filter__range-description">{`Player count ${playerCount}`}</div>

                        <DiscreteSliderSteps
                            className="filter__range-element"
                            min={1}
                            max={10}
                            defaultValue={2}
                            cb={(event, value) => {
                                setPlayerCount(value);
                            }}
                        />
                    </div>
                </div>
                <div className="filter__range">
                    <div className="filter__range-enable">
                        <Switch />
                        <p className="filter__range-description">{`Cccmsxtcccccc ${playerCount}`}</p>

                        <DiscreteSliderSteps
                            className="filter__range-element"
                            min={1}
                            max={10}
                            defaultValue={2}
                            cb={(event, value) => {
                                setPlayerCount(value);
                            }}
                        />
                    </div>
                </div>
                <div className="selects">
                    <div className="chip-select">
                        <p>{`Type`}</p>
                        <MultipleSelectChip />
                    </div>

                    <div className="chip-select">
                        <p>{`Category`}</p>
                        <MultipleSelectChip />
                    </div>
                    <div className="chip-select">
                        <p>{`Mechanic`}</p>
                        <MultipleSelectChip />
                    </div>
                    <div className="chip-select">
                        <p>{`family`}</p>
                        <MultipleSelectChip />
                    </div>

                    <div className="select">
                        <p>{`Cooperative`}</p>
                        <SelectLabels
                            selectAttr={[
                                { name: 'All', value: 0 },
                                { name: 'Only Cooperative', value: 1 },
                                { name: 'Only competettive', value: 2 },
                            ]}
                        />
                    </div>
                    <div className="select">
                        <p>{`SortBy`}</p>
                        <SelectLabels
                            selectAttr={[
                                { name: 'All', value: 0 },
                                { name: 'Newest first', value: 1 },
                                { name: 'Boardgamegeer ranking', value: 2 },
                            ]}
                        />
                    </div>
                </div>
                <div className="filter-buttons">
                    <button
                        style={{
                            backgroundColor: 'gray',
                            boxShadow:
                                'rgba(45, 35, 66, 0.4) 0px 2px 4px, rgba(45, 35, 66, 0.3) 0px 7px 13px -3px, rgb(97 113 103) 0px -3px 0px inset',
                        }}
                        type="submit"
                        className="form-container__form--button"
                    >
                        {'CLEAR'}
                    </button>
                    <button
                        type="submit"
                        className="form-container__form--button"
                    >
                        {'FILTER'}
                    </button>
                </div>
            </div>
        </details>
    );
};

export default Filter;
