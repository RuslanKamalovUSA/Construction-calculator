import React, { useEffect, useRef, useState } from 'react';

import '../tab-rooms-area/tabRoomsArea.scss';
import ExchangeRateService from '../../services/ExchangeRateService';

const TabRoomsArea = () => {
    const [roomsArea, setRoomsArea] = useState([]);
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
        onRequest()   
    }, [])

    useEffect(() => {
        console.log('Heights', heightValue)
        console.log('roomsArea', roomsArea  )
    }, [roomsArea, heightValue])

    const addHeight = (e) => {
        if (e.target.value.includes('-')) {
            setHeightValue(0)
        } else {
            setHeightValue(e.target.value)
        }
    }

    // const inputRefs = useRef([]);

    // const onFocus = (e, index) => {
    //     inputRefs.current[index].focus();
    //     e.target.value = '';
    // }

    const handleChange = (e, index) => {
        const value = e.target.value.includes('-') ? 0 : e.target.value;
        setRoomsArea(roomsArea.map((el, i) => i === index ? {...el, value: Number(value)} : el))
    }

    // const handleBlur = (e, index) => {
    //     setRoomsArea(arr => arr.map((el, i) => i === index ? {...el, value: Number(e.target.value)} : el))
    // }

    function renderItems(arr){
        const items = arr.map((typeOfRoom, index) => {
            return (
                    <li className='calculator__list-item'>
                        <div>
                            <label for="height">{typeOfRoom.name}</label>
                        </div>
                        <div className="calculator__title-height">
                            <input 
                            value={typeOfRoom.value} 
                            key={typeOfRoom.id} 
                            type="number" 
                            step="0.1" 
                            placeholder={0} 
                            className="calculator__input-height" 
                            onChange={e => handleChange(e, index)}
                            onClick={(e) => e.target.value = ''}
                            //ref={el => inputRefs.current[index] = el} 
                            //  id="height" 
                            //min={0}   
                            //onFocus={(e) => {onFocus(e, index)}}
                            //onBlur={e => handleBlur(e, index)}
                            />
                            <p className='calculator__title-height-par'>м</p>
                            <span className='superscript'>2</span>
                            
                        </div>  
                    </li>
            )
        })
        return items;
    }
    const listOfRoomsAreas = renderItems(roomsArea);

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
                                value={heightValue} 
                                type="number" 
                                id="height" 
                                step="0.1"
                                min={0} 
                                placeholder={0.0}
                                className="calculator__input-height" 
                                onChange={(e) => addHeight(e)} 
                                onClick={(e) => e.target.value === heightValue ? null : e.target.value = ''}
                                ></input>
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