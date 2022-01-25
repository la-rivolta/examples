import React, {useContext} from 'react';
import './Exchange.scss';
import {RateContext} from '../../context/RateContext';

export const Exchange = () => {
    const {state} = useContext(RateContext);
    const currency = {...state.currency};
    return(
        <div className="exchange">
            <div className="exchangeContainer">
                <div className="exchangeContent">
                    <p>Базовая валюта: {state.base} &nbsp; Дата:{state.date}</p>
                    <ul>
                        {
                            Object.keys(currency).map((item, i) => {
                                return (
                                    <li key = {item}>
                                        <span>
                                            <img src = {currency[item].flag}/>{item}
                                        </span>
                                        <span>{`1${state.base} = ${currency[item].cource} ${item}`}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}