import React, { useEffect, useRef, useState } from 'react';

import '../tab-rooms-area/tabRoomsArea.scss';
import ExchangeRateService from '../../services/ExchangeRateService';

const TabRoomsArea = () => {
    const [roomsArea, setRoomsArea] = useState([]);
    const [value, setValue] = useState([{id: '', value: ''}]);
    const [heightValue, setHeightValue] = useState(0)

    const {getRoomsArea, error, loading, cleanError} = ExchangeRateService();

    const onRequest = () => {
        getRoomsArea().then(onDataLoaded).catch(error => console.log(error))
    }
    const onDataLoaded = (data) => {
        console.log('data', data)
        setRoomsArea(data);
        console.log('roomsArea', roomsArea)
    }   

    useEffect(() => {
        console.log('updated', roomsArea)
        console.log(value)
    }, [roomsArea, value])

    useEffect(() => {
        onRequest()   
    }, [])

    useEffect(() => {
        console.log('HEIGHT ======>>>>', heightValue)   
    }, [heightValue])


    const addHeight = (e) => {
        setHeightValue(e.target.value)
    }

    const inputRefs = useRef([]);

    const onFocus = (e, index) => {
        inputRefs.current[index].focus();
        e.target.value = '';
    }

    const handleChange = (e, index) => {
        setRoomsArea(roomsArea.map((el, i) => i === index ? {...el, value: Number(e.target.value)} : el))
    }

    const handleBlur = (e, index) => {
        setRoomsArea(arr => arr.map((el, i) => i === index ? {...el, value: Number(e.target.value)} : el))
    }

    function renderItems(arr){
        const items = arr.map((typeOfRoom, index) => {
            return (
                    <li className='calculator__list-item'>
                        <div>
                            <label for="height">{typeOfRoom.name}</label>
                        </div>
                        <div className="calculator__title-height">
                            <input 
                            ref={el => inputRefs.current[index] = el} 
                            value={typeOfRoom.value} 
                            key={typeOfRoom.id} 
                            className="calculator__input-height" 
                            type="number" 
                            //  id="height" 
                            step="0.1" 
                            onFocus={(e) => {onFocus(e, index)}}
                            placeholder={Number(typeOfRoom.value)} 
                            onChange={e => {handleChange(e, index)}}
                            //</div>onBlur={e => handleBlur(e, index)}
                            ></input>
                            <p className='calculator__title-height-par'>м</p>
                            <span className='superscript'>2</span>
                        </div>  
                    </li>
            )
        })
        return items;
    }
    // console.log('====>', roomsArea)
    const listOfRoomsAreas = renderItems(roomsArea);

    const View = () => {
        return (
            <>
                <ul className='calculator__list-inner'>
                    {listOfRoomsAreas}
                </ul>
            </>
        )
    }
    
    return (
        <div>
           <div>
                <div className="calculator__parametr">
                    <div className='calculator__list-inner'>
                        <div className='calculator__list-item' id='height-header'>
                            <div>
                                <label for="height">Высота потолков в квартире:</label>
                            </div>
                            <div className="calculator__title-height ">
                                <input 
                                onClick={(e) => e.target.value === heightValue ? null : e.target.value = ''}
                                value={heightValue} 
                                onChange={(e) => {addHeight(e)}} 
                                className="calculator__input-height" 
                                type="number" 
                                id="height" 
                                step="0.1" 
                                placeholder={0.0}></input>
                                <p className='calculator__title-height-par'>м</p>
                                <span className='superscript'>2</span>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="calculator__list">
                    <h3><u className='calculator__underline-text'>Площадь отдельных комнат:</u></h3>
                    <ul className='calculator__list-inner'>
                        {listOfRoomsAreas}
                        {/* <li className='calculator__list-item'>
                            <div>
                                <label for="height">Высота потолков в квартире:</label>
                            </div>
                            <div className="calculator__title-height">
                                <input className="calculator__input-height" type="number" id="height" step="0.1" placeholder="0.0"></input>
                                <p>м2</p>
                            </div>  
                        </li> */}


                        {/* <li className='calculator__list-item'>
                            <div>
                                <label for="height">Высота потолков в квартире:</label>
                            </div>
                            <div className="calculator__title-height">
                                <input className="calculator__input-height" type="number" id="height" step="0.1" placeholder="0.0"></input>
                                <p>м2</p>
                            </div>  
                        </li>
                        <li className='calculator__list-item'>
                            <div>
                                <label for="height">Высота потолков в квартире:</label>
                            </div>
                            <div className="calculator__title-height">
                                <input className="calculator__input-height" type="number" id="height" step="0.1" placeholder="0.0"></input>
                                <p>м2</p>
                            </div>  
                        </li>
                        <li className='calculator__list-item'>
                            <div>
                                <label for="height">Высота потолков в квартире:</label>
                            </div>
                            <div className="calculator__title-height">
                                <input className="calculator__input-height" type="number" id="height" step="0.1" placeholder="0.0"></input>
                                <p>м2</p>
                            </div>  
                        </li>
                        <li className='calculator__list-item'>
                            <div>
                                <label for="height">Высота потолков в квартире:</label>
                            </div>
                            <div className="calculator__title-height">
                                <input className="calculator__input-height" type="number" id="height" step="0.1" placeholder="0.0"></input>
                                <p>м2</p>
                            </div>  
                        </li>
                        <li className='calculator__list-item'>
                            <div>
                                <label for="height">Высота потолков в квартире:</label>
                            </div>
                            <div className="calculator__title-height">
                                <input className="calculator__input-height" type="number" id="height" step="0.1" placeholder="0.0"></input>
                                <p>м2</p>
                            </div>  
                        </li>
                        <li className='calculator__list-item'>
                            <div>
                                <label for="height">Высота потолков в квартире:</label>
                            </div>
                            <div className="calculator__title-height">
                                <input className="calculator__input-height" type="number" id="height" step="0.1" placeholder="0.0"></input>
                                <p>м2</p>
                            </div>  
                        </li>
                        <li className='calculator__list-item'>
                            <div>
                                <label for="height">Высота потолков в квартире:</label>
                            </div>
                            <div className="calculator__title-height">
                                <input className="calculator__input-height" type="number" id="height" step="0.1" placeholder="0.0"></input>
                                <p>м2</p>
                            </div>  
                        </li>
                        <li className='calculator__list-item'>
                            <div>
                                <label for="height">Высота потолков в квартире:</label>
                            </div>
                            <div className="calculator__title-height">
                                <input className="calculator__input-height" type="number" id="height" step="0.1" placeholder="0.0"></input>
                                <p>м2</p>
                            </div>  
                        </li>
                        <li className='calculator__list-item'>
                            <div>
                                <label for="height">Высота потолков в квартире:</label>
                            </div>
                                <div className="calculator__title-height">
                                <input className="calculator__input-height" type="number" id="height" step="0.1" placeholder="0.0"></input>
                                <p>м2</p>
                            </div>  
                        </li> */}


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