import { React, Fragment } from 'react';
import './Layout.scss';
import {Route, Switch} from "react-router-dom";

import { AddClass } from '../../hoc/AddClass';
import { Header } from '../header/Header';
import { Home } from '../../pages/home/Home';
import { Calc } from '../../pages/calc/Calc';
import { Sample } from '../../pages/sample/Sample';
import { Info } from '../../pages/info/Info';
import { SideBar } from '../sidebar/SideBar';

const Layout = () => {
    return(
        <Fragment>
            <Header/>
            <div className="content">
                <div className="routes">
                    <Switch>
                      <Route path='/' component={Home} exact/>
                      <Route path='/calc' render = {() => <Calc/>}/>  
                      <Route path='/sample' render = {() => <Sample/>}/>  
                      <Route path='/info' render = {() => <Info/>}/>  
                    </Switch>  
                </div>
                <SideBar/>
            </div>  
        </Fragment>

    )
}

export default AddClass(Layout, 'layout');