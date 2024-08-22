import React from 'react';
import Calculator from '../calculator/Calculator';
import ResultPanel from '../resultPanel/ResultPanel';

import './main.scss';

const Main = () => {
    return (
        <>
            <div className="container__calculator">
                <Calculator></Calculator>
                <div className="container__result">
                    <ResultPanel price={200}></ResultPanel>
                </div>
            </div> 
        </>
    );
};

export default Main;