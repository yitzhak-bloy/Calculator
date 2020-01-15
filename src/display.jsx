import React from 'react';

import './display.css';

const Display = ({count, sum}) => (
  <div id='display'>
    <div id='displayCount'>{count ? count : '0'}</div>
    <div id='displaySum'></div>{sum}
  </div>
);

export default Display;