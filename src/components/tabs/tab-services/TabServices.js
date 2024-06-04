import React from 'react';

import '../tab-services/tabServices.scss';

const TabServices = () => {
    return (
        <div>
            <div className="calculator__parametr">
                <div className="calculator__label">
                    <label for="height">Название необходимых работ:</label>
                </div>
            </div>
            <div className="calculator__list">
            <ul className='calculator__list-services'>
                <li className='calculator__service'>
                    <div className="parametr">
                        <p>Тип работы <span>м2</span></p>
                    </div>
                    <div className="calculator__parametr-checkbox">
                        <input className="input-checkbox" type="checkbox" id="checkbox" ></input>
                    </div>      
                </li>
                <li className='calculator__service'>
                    <div>
                        <p>Тип работы <span className='calculator__measurement'>м2</span></p>
                    </div>
                    <div className="calculator__parametr-checkbox">
                        <input className="input-checkbox" type="checkbox" id="checkbox" ></input>
                    </div>      
                </li>
            </ul>
            </div>
            <div className="calculator__notes">
                <ul className='calculator__notes-list'><p>Примечания:</p>
                <li>устанавливайте галочку напротив услуги, если она необходима</li>
                <li>рядом с услугой отображена средняя стоимость на текущий момент.Сюда входит работа и материал. Это может быть стоимость за квадратный или погонный метр, усредненная стоимость всей сантехники для ремонта и тд. Итоговый вариант может отличаться от выбранных вами материалов, но калькулятор даст вам понимание о стоимости ремонта среднего качества.</li>
                </ul>
            </div>
        </div>
    );
};

export default TabServices;