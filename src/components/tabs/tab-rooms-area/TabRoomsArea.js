import React, { useEffect, useMemo, useRef, useState } from 'react';

import '../tab-rooms-area/tabRoomsArea.scss';
import CalculatorService from '../../services/CalculatorService';
import { useDispatch, useSelector } from 'react-redux';

const TabRoomsArea = () => {

    const [roomsArea, setRoomsArea] = useState([]);
    const [heightValue, setHeightValue] = useState(0)

    const dispatch = useDispatch();
    const totalArea = useSelector(state => state)

    const {getRoomsArea, error, loading, cleanError} = CalculatorService();

    const onRequest = () => {
        getRoomsArea().then(onDataLoaded).catch(error => console.log(error))
    }
    const onDataLoaded = (data) => {
        setRoomsArea(data);
    }   

    useEffect(() => {
        onRequest()   
    }, [])

    useEffect(() => {
        console.log(roomsArea)
        console.log(totalArea)
    }, [roomsArea, totalArea])

    
    const calculateArea = (arr) => {
        const squareArea = arr.reduce((a, b) => (a + b.value), 0) * heightValue;
        console.log('Area', squareArea);
    }

    const addHeight = (e) => {
        if (e.target.value.includes('-')) {
            setHeightValue(0)
        } else {
            setHeightValue(e.target.value)
        }
    }

    const calculateTotalArea = (arr) => {
       
    }
    // const inputRefs = useRef([]);

    // const onFocus = (e, index) => {
    //     inputRefs.current[index].focus();
    //     e.target.value = '';
    // }

    const handleChange = (e, index) => {
        const value = e.target.value.includes('-') ? 0 : e.target.value;
        setRoomsArea(roomsArea.map((el, i) => i === index ? {...el, value: Number(value)} : el))
        //console.log("ARR", arr)
        let roomArea = roomsArea.map(el => el.value).reduce((a, b) => a + b, 0)
        let name = [roomsArea[index].name]
        dispatch({type: "ADD_AREA", payload: {[name] : e.target.value}}) 
        console.log(totalArea)
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
                            onChange={e => {
                                handleChange(e, index)
                                }
                            }
                            onClick={(e) => e.target.value = ''}
                            //ref={el => inputRefs.current[index] = el} 
                            //  id="height" 
                            //min={0}   
                            // onFocus={e => calculateTotalArea(e)}
                            // onBlur={e => calculateTotalArea(e)}
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