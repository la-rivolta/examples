import React, {useContext} from 'react';
import {RateContext} from '../../context/RateContext';
import './SideBar.scss';

export const SideBar = () => {
    const {state} = useContext(RateContext);
    return(
        <div>
            <div className="sidebar">
            <div className="sidebarHead">
                <h2>Все валюты</h2>
            </div>
            <div className="sidebarContent">
                <ul>
                    {
                        Object.keys(state.currency).map((item, index) => {
                            return (
                                <li key={item}>
                                    <p>
                                        <span>
                                            <img src={state.currency[item].flag} alt={item}/>&nbsp;{item}
                                        </span>
                                        &nbsp; {state.currency[item].name}
                                    </p>
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