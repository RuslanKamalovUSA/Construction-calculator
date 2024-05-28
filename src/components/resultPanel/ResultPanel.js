import React from 'react';

import '../resultPanel/resultPanel.scss';

const ResultPanel = () => {
    return (
        <div className='container__result-panel'>
            <p className='container__result-panel__price'>0 грв</p>
            <p className='container__result-panel__title'>Примерная<br></br>общая стоимость работ</p>
            <p className='container__result-panel__price'>0 $</p>
            <p className='container__result-panel__title'>Сумма в долларах США по текущему курсу</p>
        </div>
    );
};

export default ResultPanel;