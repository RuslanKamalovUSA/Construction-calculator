import React from 'react';
import { NavLink } from 'react-router-dom';    
import './button.scss';

const Button = ({btnName, btnWidth, switchToRoute}) => {
    return (
        <div className='button'>
            <NavLink to={switchToRoute}>
                <button style={{width: btnWidth}}>
                    {btnName}
                </button>
            </NavLink>
        </div>
    );
};

export default Button;