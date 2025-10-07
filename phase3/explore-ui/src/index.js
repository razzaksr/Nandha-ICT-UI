import React from 'react';
import ReactDOM from 'react-dom/client';
import Pics, { Play, Text } from './Media';
import { DemoState } from './frequent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <DemoState/>
    {/* <h1>Welcome to REact LEarning</h1>,
    <ol>
      <li>REact Router DOM</li>
      <li>React CRUD</li>
    </ol>
    <Pics/>
    <Play/>
    <Text/> */}
  </>

  // <div>
  // <h1>Welcome to REact LEarning</h1>
  //   <ol>
  //     <li>REact Router DOM</li>
  //     <li>React CRUD</li>
  //   </ol>
  // </div>
  // [
  //   <h1>Welcome to REact LEarning</h1>,
  //   <ol>
  //     <li>REact Router DOM</li>
  //     <li>React CRUD</li>
  //   </ol>
  // ]
);
