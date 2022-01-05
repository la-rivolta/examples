import React from 'react';

import './Item.css';

const Item = props => {
  return(
      <div className="Item">
        <p className="twoTitle">{props.title}
        </p>
        <div className="bottom-item">
        <div className="source">{props.source}</div>
        <div className="publishedAt">{props.publishedAt}</div>
        </div>
      </div>
  )
}

export default Item;