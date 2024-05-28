import React from 'react';
import Button from '../button/Button';

import '../calculator/calculator.scss'

const Calculator = () => {
    return (
            <div className="calculator">
                <div className="calculator__inner">
                    <div className="calculator__tabs">
                        <div className="calculator__tabs__tab-one">
                            <h4>Площадь помещения</h4>
                        </div>
                        <div className="calculator__tabs__tab-two">
                            <h4>Необходимые работы</h4>
                        </div>
                    </div>
                    <div className="calculator__parametrs">
                        <div className="calculator__parametrs__inner">
                            <div className="calculator__title-height">
                                <div className="calculator__title-height__label">
                                    <label for="height">Высота потолков в квартире:</label>
                                </div>
                                <div className="calculator__title-height__input">
                                    <input className="input-height" type="number" id="height"></input>
                                </div>  
                                <div>
                                    <p>м2</p>
                                </div>
                            </div>
                            <div className="calculator__list">
                            <p>Площадь отдельных комнат:</p>
                            <ul className='grid'>
                                <li className='grid-item'>
                                <div className="calculator__title-height__label">
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
                                <li className='grid-item'>
                                <p>Высота потолков в квартире:</p>
                                <p>0.0</p>
                                <p>м</p>
                                </li>
                            </ul>
                            </div>

                        </div>
                    </div>  
                    <div className="calculator__extra">
                        <ul className='calculator__extra'>Примечания:</ul>
                        <li>устанавливайте площадь помещений там, где необходим ремонт </li>
                        <li>если есть дополнительные комнаты, например, Спальня №3, то добавляйте их площадь к существующим в калькуляторе</li>
                    </div>
                </div>
                <div className='calculator__button'>
                    <Button></Button>
                </div>
            </div>
    );
};

export default Calculator;