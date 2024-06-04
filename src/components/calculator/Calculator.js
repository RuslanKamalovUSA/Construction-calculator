import React, { useState } from 'react';
import TabRoomsArea from '../tabs/tab-rooms-area/TabRoomsArea';
import TabServices from '../tabs/tab-services/TabServices';

import Button from '../button/Button';

import '../calculator/calculator.scss'


const Calculator = () => {
    const [tabRoomsArea, setRoomsArea] = useState(true)

    const changeActiveTab = (currentTarget) => {
        currentTarget.className += ' active'
        console.log(currentTarget.className)
    }

    let tabStyle = 'calculator__tab ';
    let activeTabStyle = 'calculator__tab active'
    return (
        
            <div className="calculator">
                <div className="calculator__tabs">
                    <div id='tab-one' className={!tabRoomsArea ? tabStyle : activeTabStyle} onClick={() => setRoomsArea(true)}>
                        <p>Площадь помещения</p>
                    </div>
                    <div id='tab-two'className={tabRoomsArea ? tabStyle : activeTabStyle} onClick={() => setRoomsArea(false)}>
                        <p>Необходимые работы</p>
                    </div>
                </div>
                <div className="calculator__parametrs-inner">
                    <div className="calculator__parametrs">
                        {tabRoomsArea === true ? <TabRoomsArea/> : <TabServices/>}
                    </div> 
                </div> 
                <div>
                    <Button></Button>
                </div>
        </div>
    );
};

export default Calculator;