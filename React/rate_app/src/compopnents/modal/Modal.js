import React, {Fragment} from 'react';
import { Login } from '../login/Login';
import { Register } from '../register/Register' 
import './Modal.scss';

export const Modal = () =>{
    return(
        <div className="modal">
            <Fragment>
            <div class="modalHead">
                <ul>
                    <li>Вход</li>
                    <li>Регистрация</li>
                </ul>
                <i className="fa fa-times" arial-hidden="true"></i>
            </div>
            <hr/>
            </Fragment>
            {/* <Login/> */}
            <Register/>
        </div>
    );
}

