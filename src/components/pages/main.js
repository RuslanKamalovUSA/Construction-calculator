    import React from 'react';
    import Calculator from '../calculator/Calculator';
    import ResultPanel from '../resultPanel/ResultPanel';
    
    import './main.scss';
    

    const Main = () => {
        
        return (
            <div className='container'>
                <div className="container__inner">
                    <div className="container__title">
                        <p>Калькулятор стоимости ремонта</p>
                    </div>
                    <div className="container__calculator-result">
                        <Calculator></Calculator>
                        <div className="container__calculator-result__result">
                            <ResultPanel></ResultPanel>
                        </div>
                    </div>
                    <div className="container__log-in">
                    </div>
                </div>
            </div>
        );
    };
    
    export default Main;