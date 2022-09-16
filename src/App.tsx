import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Tabs, Select, Form, Input, Button } from 'antd';
import Form1 from './Form1';
import Properties from './properties';
import Grup from './grup';

const items = [
  { label: 'Cihaz Ekle', key: '1', children: <Form1 /> }, // remember to pass the key prop
  { label: 'Özellik Ekle', key: '2', children: <Properties /> },
  { label: 'Cihaz Grubu Ekle', key: '3', children: <Grup /> },
];
function App() {
  return (
    <div className='App'>
      <Tabs defaultActiveKey='1' items={items} />
    </div>
  );
}

export default App;
