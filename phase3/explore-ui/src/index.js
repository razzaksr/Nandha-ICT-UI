import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Pharmacy } from './Pharmacy';
import { Engineering } from './Engineering';
import { Nursing } from './Nursing';
import { Season } from './Season';
// import Pics, { Play, Text } from './Media';
// import { DemoState } from './frequent';
// import { Card } from './items';
// import { NewCustomer } from './newcustomer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='show/:month' element={<Season/>} />
        <Route path="pharma" element={<Pharmacy/>} />
      </Routes>
    </BrowserRouter>
  </>
)

// root.render(
//   <>
//     <BrowserRouter>
//       {/* default components when no routes */}
//       <a href={'/engg'}>Know More on Engineering</a>
//       <a href={'/pharma'}>Know More on Pharama</a>
//       <a href={'/nurse'}>Know More on Nursing </a>
//       <Routes>
//         <Route path="pharma" element={<Pharmacy/>} />
//         <Route path="engg" element={<Engineering/>} />
//         <Route path="nurse" element={<Nursing/>} />
//       </Routes>
//     </BrowserRouter>
//   </>
// )

// root.render(
//   <>
//     {/* <Card/> */}
//     {/* <NewCustomer/> */}
//   </>
//   // <>
//   //   <DemoState/>
//   // </>
//   // <>
//   //   {/* <h1>Welcome to REact LEarning</h1>,
//   //   <ol>
//   //     <li>REact Router DOM</li>
//   //     <li>React CRUD</li>
//   //   </ol>
//   //   <Pics/>
//   //   <Play/>
//   //   <Text/> */}
//   // </>
//   // <div>
//   // <h1>Welcome to REact LEarning</h1>
//   //   <ol>
//   //     <li>REact Router DOM</li>
//   //     <li>React CRUD</li>
//   //   </ol>
//   // </div>
//   // [
//   //   <h1>Welcome to REact LEarning</h1>,
//   //   <ol>
//   //     <li>REact Router DOM</li>
//   //     <li>React CRUD</li>
//   //   </ol>
//   // ]
// );
