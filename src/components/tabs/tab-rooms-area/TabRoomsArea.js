import React from 'react';

import '../tab-rooms-area/TabRoomsArea';

const TabRoomsArea = () => {
    return (
        <div>
           <div>
                <div className="calculator__parametr">
                    <div className="calculator__label">
                        <label for="height">Высота потолков в квартире:</label>
                    </div>
                    <div className="calculator__input">
                        <input className="calculator__input-height" type="number" id="height"></input>
                    </div>  
                    <div>
                        <p>м2</p>
                    </div>
                </div>
                <div className="calculator__list">
                    <p><u className='underline-text'>Площадь отдельных комнат:</u></p>
                    <ul className='grid'>
                        <li className='grid-item'>
                        <div className="parametr">
                            <label for="height">Высота потолков в квартире:</label>
                        </div>
                        <div className="calculator__title-height__input">
                            <input className="input-height" type="number" id="height"></input>
                        </div>  
                        <div>
                            <p>м2</p>
                        </div>
                        </li>
                        <li className='grid-item'>
                        <div className="parametr">
                            <label for="parametr">Высота потолков в квартире:</label>
                        </div>
                        <div className="calculator__parametr-checkbox">
                            <input className="input-checkbox" type="checkbox" id="checkbox" ></input>
                        </div>      
                        <div>
                            <p>м2</p>
                        </div>
                        </li>
                        <li className='grid-item'>
                        <p>Высота потолков в квартире:</p>
                        <p>0.0</p>
                        <p>м</p>
                        </li>
                        <li className='grid-item'>
                        <p>Высота потолков в квартире:</p>
                        <p>0.0</p>
                        <p>м</p>
                        </li>
                        <li className='grid-item'>
                        <p>Высота потолков в квартире:</p>
                        <p>0.0</p>
                        <p>м</p>
                        </li>
                        <li className='grid-item'>
                        <p>Высота потолков в квартире:</p>
                        <p>0.0</p>
                        <p>м</p>
                        </li>
                        <li className='grid-item'>
                        <p>Высота потолков в квартире:</p>
                        <p>0.0</p>
                        <p>м</p>
                        </li>
                        <li className='grid-item'>
                        <p>Высота потолков в квартире:</p>
                        <p>0.0</p>
                        <p>м</p>
                        </li>
                        <li className='grid-item'>
                        <p>Высота потолков в квартире:</p>
                        <p>0.0</p>
                        <p>м</p>
                        </li>
                        <li className='grid-item'>
                        <p>Высота потолков в квартире:</p>
                        <p>0.0</p>
                        <p>м</p>
                        </li>
                        <li className='grid-item'>
                        <p>Высота потолков в квартире:</p>
                        <p>0.0</p>
                        <p>м</p>
                        </li>
                        <li className='grid-item'>
                        <p>Высота потолков в квартире:</p>
                        <p>0.0</p>
                        <p>м</p>
                        </li>
                    </ul>
                </div>
                <div className="calculator__notes">
                    <ul className='calculator__notes-list'>
                    <p>Примечания:</p>
                    <li>устанавливайте площадь помещений там, где необходим ремонт </li>
                    <li>если есть дополнительные комнаты, например, Спальня №3, то добавляйте их площадь к существующим в калькуляторе</li>
                    </ul>
                </div>
            </div> 
        </div>
    );
};

export default TabRoomsArea;