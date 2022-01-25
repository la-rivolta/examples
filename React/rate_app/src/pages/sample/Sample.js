import React, {useContext} from 'react';

import {Button} from '../../compopnents/button/Button';
import {RateContext} from '../../context/RateContext';
import './Sample.scss';

export const Sample = () => {
    const {state, baseHandler, base2Handler, dateHandler, dataWrite, dataDelete} = useContext(RateContext);
    return (
        <div className="sample">
            <div className="sampleContainer">
                <div>
                    <h3>Получить курс &nbsp;</h3>
                    <select onChange={baseHandler} value={state.sample.base}>
                        {Object.keys(state.currency).map((item, i)=>{
                            return(
                            <option key = {item}>{item}</option>
                            )

                        })}
                    </select>
                    &nbsp; &nbsp; к &nbsp; &nbsp;
                    <select onChange={base2Handler} value={state.sample.base2}>
                        {Object.keys(state.currency).map((item, i)=>{
                            return(
                            <option key = {item}>{item}</option>
                            )

                        })}
                    </select>
                </div>
            </div>
            <div className="sampleHead">
                <span>Дата: <input type="date" onChange={dateHandler}/></span>
                <Button text='Получить курс' click={dataWrite} 
                //args={state.sample}
                />
            </div>
            <div className="sampleResult">
                <ul>
                   {Object.keys(state.sampleList).map((item, i) => {
                       return(
                        <li key = {item}>
                            <span><img src={state.currency[state.sampleList[item].base].flag} alt={item}/>&nbsp; {state.sampleList[item].base}</span>
                            <span>{state.sampleList[item].date}</span>
                            <span>{`${state.sampleList[item].course} ${state.sampleList[item].base2}`}</span>
                            <button onClick = {() => dataDelete(item)}><i className="fa fa-times"/></button>
                        </li>    
                       )
                       
                   })

                   }             
                </ul>
            </div>
        </div>
    )
}