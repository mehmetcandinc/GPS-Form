import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Tabs, Select, Form, Input, Button } from 'antd';
import Form1 from './Form1';
function App() {
  return (
    <div className='App'>
      <Tabs defaultActiveKey='1'>
        <Tabs.TabPane tab='Cihaz Ekle' key='1'>
          <Form1 />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Özellik Ekle' key='2'></Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default App;
