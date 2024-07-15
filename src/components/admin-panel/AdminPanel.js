import Button from '../button/Button';
import '../admin-panel/adminPanel.scss';
import { useEffect, useState, useRef } from 'react';
import usePricesUpdateForAdmin from '../services/PricesUpdateForAdmin.js';
import ExchangeRateService from '../services/ExchangeRateService.js';

const AdminPanel = () => {

    const [operations, setOperations] = useState([]);
    const [value, setValue] = useState(0);
    const [focus, setFocus] = useState(false);
    const [listOfValues, setListOfValues] = useState({})
    
    const {getOperations} = ExchangeRateService();

    const onRequest = () => {
        getOperations().then(onLoaded).catch(err => console.log(err))
    }

    const onLoaded = (data) => {
        setOperations(data)
    }

    useEffect(() => {
        onRequest();
    }, [])

    useEffect(() => {
        console.log(operations);
    }, [operations])

    const inputRef = useRef([]);

    const onFocus = (e, index) => {
        inputRef.current[index].focus();
        e.target.value = '';
        setFocus(true);
    }

    const handleChange = (e, typeOfWork) => {
        
        setValue(e.target.value)
    }

    const handleAddItem = (e, typeOfWork) => {
        if ((e.target.value.includes('-')) ) {
            setOperations(operations => operations.map(el => el.id === typeOfWork.id ? {...typeOfWork, count: 0} : el))
            
        } else {
            setOperations(operations => operations.map(el => el.id === typeOfWork.id ? {...typeOfWork, count: e.target.value === '' ? el.count : e.target.value } : el
            )) 
        }
    }

    function renderItems(arr) {
        
        const items = arr.map((typeOfWork, index) => {
            let degree;
            if (typeOfWork.unit.includes('2') || typeOfWork.unit.includes('3')) {
                degree = typeOfWork.unit.slice(typeOfWork.unit.length - 1);
            }
            let unitWithDegree = typeOfWork.unit.slice(0, typeOfWork.unit.length - 1);
            
            return (
                <li>
                    <div className='admin-window__parametr-inner'>
                    <label for="price">{typeOfWork.name}</label>
                    <div className={`admin-window__parametr-input`}>
                        <div>
                        <input
                            ref={el => inputRef.current[index] = el}
                            value={typeOfWork.value} 
                            key={typeOfWork.id}
                            className={`admin-window__input-height`} 
                            type="number" 
                            //id="height" 
                            step="0.1" 
                            placeholder={typeOfWork.count} 
                            onFocus={e => onFocus(e, index)}
                            onChange={(e) => handleChange(e, typeOfWork)}
                            onBlur={(e) => handleAddItem(e, typeOfWork)}></input>
                        </div>
                        <div className='admin-window__measurment'>
                            <div><p className='par'>{degree !== undefined ? unitWithDegree : typeOfWork.unit}</p></div>
                            <div><span className='superscript'>{degree !== undefined ? degree : null}</span></div>
                        </div>
                    </div>  
                    </div>
                </li>
            )
        })
        return (
            <ul className='admin-window__parametrs-prices'>
                {items}
            </ul>
        )
    }

    const items = renderItems(operations);
    
    return (
            <div className="admin-window">
                <div className="admin-window__parametrs-inner">
                    <div className='admin-window__title'>
                        <h3><u className='admin-window__underline-text'>Установите средний ценник каждой работы:</u></h3>
                    </div>
                    <div className='admin-window__parametrs-prices-inner'>

                        {items}

                        {/* <ul className='admin-window__parametrs-prices'>
                            <li>
                                <div className='admin-window__parametr-inner'>
                                <label for="price">Демонтаж, зачистка старой отделки</label>
                                <div className="admin-window__parametr-input">
                                    <div>
                                    <input className="admin-window__input-height" type="number" id="height" step="0.1" placeholder="0.0"></input>
                                    </div>
                                    <div>
                                    <p className='par'>м2</p>
                                    </div>
                                </div>  
                                </div>
                            </li>
                            <li>
                                <div className='admin-window__parametr-inner'>
                                <label for="price">Демонтаж, зачистка старой отделки</label>
                                <div className="admin-window__parametr-input">
                                    <div>
                                    <input className="admin-window__input-height" type="number" id="height" step="0.1" placeholder="0.0"></input>
                                    </div>
                                    <div>
                                    <p className='par'>м2</p>
                                    </div>
                                </div>  
                                </div>
                            </li>
                        </ul> */}

                    </div>
                        <div className='admin-window__notes-btn'>
                        <div className="admin-window__notes">
                        <ul className='admin-window__notes-list'>
                            <p>Примечания:</p>
                            <li>Устанавливайте только цифры, еденицы измерения устанавливаются автоматически</li>
                        </ul>
                        </div>
                        <div className='admin-window__btn'>
                            <Button btnName={"Выйти"} btnWidth={"185px"} switchToRoute={'/main'}/>
                        </div>
                    </div>
                </div>
                
            </div>
        
    )
}

export default AdminPanel;