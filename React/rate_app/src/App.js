import './App.scss';
import React from 'react';
import axios from 'axios';

import Layout from './compopnents/layout/Layout';
import {Dark} from './compopnents/dark/Dark';
import {Modal} from './compopnents/modal/Modal'
import {RateContext} from './context/RateContext';
import CHF from '../src/image/CHF.png';
import CNY from '../src/image/CNY.png';
import EUR from '../src/image/EUR.png';
import GBP from '../src/image/GBP.png';
import JPY from '../src/image/JPY.png';
import RUB from '../src/image/RUB.png';
import USD from '../src/image/USD.png';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      base: 'EUR',
      rate: '',
      date: '',
      currency: {EUR: {name: 'Евро', flag: EUR, cource: ''},
                 USD: {name: 'Доллар США', flag: USD, cource: ''},
                 CHF: {name: 'Швейцарский Франк', flag: CHF, cource: ''},
                 CNY: {name: 'Доллар США', flag: CNY, cource: ''},
                 GBP: {name: 'Фунт Стерлингов', flag: GBP, cource: ''},
                 JPY: {name: 'Японская Йена', flag: JPY, cource: ''},
                 RUB: {name: 'Российский Рубль', flag: RUB, cource: ''}},
          //calc
      inputValue: 100,
      currencyValue: 'EUR',
      result: null,

      //sample
      sample: {base: 'EUR', base2: 'USD', date: '', course: ''},
      sampleList: ''
      }
  }

  dataWrite = async () => {
    await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=a76f24c1347788a256529f02c5423124&base=EUR`)
    .then((responce) => responce.json()).then((responce) => {
      this.setState({sample: {...this.state.sample, course: responce.rates[this.state.sample.base2]}})
    })

    await axios.post('https://rateapp-37e91-default-rtdb.firebaseio.com/sample.json', this.state.sample)
    .then((response) => {console.log(response)});

    await axios('https://rateapp-37e91-default-rtdb.firebaseio.com/sample.json')
    .then((response) => {this.setState({sampleList: response.data})});

  }

  dataDelete = async (id) => {
    let sampleList = {...this.state.sampleList};
    delete sampleList[id];
    this.setState({sampleList});

    axios.delete(`https://rateapp-37e91-default-rtdb.firebaseio.com/sample/${id}.json`);
  }

  baseHandler = (event) =>{
    this.setState({sample: {...this.state.sample, base: event.target.value}})
  }

  base2Handler = (event) =>{
    this.setState({sample: {...this.state.sample, base2: event.target.value}})
  }

  dateHandler = (event) =>{
    this.setState({sample: {...this.state.sample, date: event.target.value}})
  }

  inputValueHandler = (event) => {
    this.setState({
      inputValue: event.target.value,
      result: null
    })
  }

  currencyValueHandler = (event) => {
    this.setState({
      currencyValue: event.target.value,
      result: null
    })
  }

  calculatorHandler = async (value) => {
    let result;

    await fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=a76f24c1347788a256529f02c5423124&base=EUR`)
    .then((responce) => responce.json()).then((responce) => {
      result = responce.rates[value] * this.state.inputValue;
    })

    this.setState({result});
    console.log(this.state.result);
  }

  componentDidMount(){
    fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=a76f24c1347788a256529f02c5423124&base=${this.state.base}`)
    .then((responce) => responce.json()).then((responce => {
      console.log(responce);
      const rateArr = ['USD', 'CHF', 'CNY', 'EUR', 'GBP', 'JPY', 'RUB'];
      let currency = {...this.state.currency};
      for(let i = 0; i < rateArr.length; i++){
        currency[rateArr[i]].cource = responce.rates[rateArr[i]];
      }
      console.log(currency);

      this.setState({
        rate: responce.rates,
        date: responce.date,
        currency
      })
    }))

    axios('https://rateapp-37e91-default-rtdb.firebaseio.com/sample.json')
    .then((response) => {this.setState({sampleList: response.data})});
  }

  render(){

    return(
      <RateContext.Provider value={{state: this.state,
      inputValueHandler: this.inputValueHandler,
      currencyValueHandler: this.currencyValueHandler,
      calculatorHandler: this.calculatorHandler,
      baseHandler: this.baseHandler,
      base2Handler: this.base2Handler,
      dateHandler: this.dateHandler,
      dataWrite: this.dataWrite,
      dataDelete: this.dataDelete
      }}>
        <Dark/>
        <Modal/>
        <Layout/>
      </RateContext.Provider>

    )
  }
}

export default App;
