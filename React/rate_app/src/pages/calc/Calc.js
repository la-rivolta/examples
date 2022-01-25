import React from 'react';

import {Counter} from '../../compopnents/counter/Counter';
import {CountResult} from '../../compopnents/countresult/CountResult';
import './Calc.scss';

export const Calc = () => {
    return (
        <div className='calculator'>
            <div className='calcContainer'>
                <Counter/>
                <CountResult/>
            </div>
        </div>
    )
}