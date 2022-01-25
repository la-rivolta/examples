import React, {useContext} from 'react';

import {RateContext} from '../../context/RateContext';
import './CountResult.scss';

export const CountResult = () => {
    const {state} = useContext(RateContext);
    return (
        <ul>
            {state.result ? <li>
                <div className='calcResult'>
                    <p>
                        <span>{state.inputValue}&nbsp;EUR</span>
                        = 
                        <span>{state.result}&nbsp;{state.currencyValue}</span>
                    </p>
                </div>
            </li> : null}
        </ul>
    )
}