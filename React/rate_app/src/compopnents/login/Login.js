import React, {Fragment} from 'react';

import './Login.scss';
import {Button} from '../button/Button';

export const Login = () =>{
    return(
        <Fragment>
            <div className="modalForm">
                <div className="modalInput">
                    <span></span>
                    <input type="text"/>
                </div>

                <div className="modalInput">
                    <span></span>
                    <input type="text"/>
                </div>
            </div>
            <div className="modalBtn">
                <Button text="Войти"/>
            </div>
        </Fragment>
    );
}

