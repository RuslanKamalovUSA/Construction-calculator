import React, { useEffect, useState } from 'react';
import '../services/CalculatorService'
import '../resultPanel/resultPanel.scss';
import CalculatorService from '../services/CalculatorService';

const ResultPanel = (props) => {

    const price = props.price;
    const [rate, setRate] = useState(0);
    const [priceUAH, setPriceUAH] = useState(price);
    const [priceUSD, setPriceUSD] = useState(0);

    const {getCurrentUAHRate, getCurrentUAHRateProxy, loading, error, cleanError} = CalculatorService();

    const onRequest = () => {
        getCurrentUAHRateProxy().then(onDataLoaded).catch(error => console.log(error))
    }

    const onDataLoaded = (data) => {
        const rateData = data
        setRate(rateData);
        const convertedToUsdData = (price / data).toFixed(2)
        setPriceUSD(convertedToUsdData);
    }

    useEffect(() => {
        onRequest();
    }, [price])

    return (
        <div className='container__result-panel'>
            <p className='container__result-panel__price'>{priceUAH} грв</p>
            <p className='container__result-panel__title'>Примерная<br></br>общая стоимость работ</p>
            <p className='container__result-panel__price'>{priceUSD}$</p>
            <p className='container__result-panel__title'>Сумма в долларах США по текущему курсу</p>
        </div>
    );
};

export default ResultPanel;