import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

import Item from '../Item/Item.js';
import './NewsPage.css';


 const useFetch = () => {
  const [data, updateData] = useState(null);  
  const requestUrl = 'https://newsapi.org/v2/top-headlines?' +
  'country=ru&' +
  'apiKey=4ed20438a0e64cdbab1159d6508da2a5';
  useEffect( () => {
    const fetchData = async () => {
      const response = await axios.get(requestUrl);
      updateData(response.data.articles);
    }
    fetchData();
  }, [])
  return data;
 }

const date = (n) =>{
  const date = new Date(n);
  return date.getDate()+ '/' + (date.getMonth()+1);
 }

const News = () => {
  let result = useFetch();
  return result && result.map((item, index) => {
    if (index < 18 ) { return(
      <NavLink to={{
        pathname: `/news/${item.title}`,
        state: {item}
      }}
      exact
      key={index}
      >
        <div className="allItems">
          <Item 
          key={index}          
          title={item.title}          
          publishedAt={date(item.publishedAt)}  
          source={item.source.name}    
          urlToImage={item.urlToImage}
          description={item.description}  
          />        
        </div>
      </NavLink>
    )}
  })
}

export default News;