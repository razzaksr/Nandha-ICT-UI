import React from 'react';
import ReactDOM from 'react-dom/client';
import { NewContact } from './NewContact';
import { ViewContacts } from './ViewContacts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <a href={'/add'}>Add</a>
      <a href={'/view'}>View</a>
      <Routes>
        <Route path="add" element={<NewContact/>} />
        <Route path="view" element={<ViewContacts/>} />
      </Routes>
    </BrowserRouter>
  </>
);
