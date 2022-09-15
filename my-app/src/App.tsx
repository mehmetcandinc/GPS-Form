import React from 'react';
import './App.css';
import { Select } from 'antd';
import Properties from './properties';
const { Option } = Select;

const handleChange = (value: any) => {
  console.log(`selected ${value}`);
};

const App = () => {
  return (
    <div>
      <Properties />
    </div>
  );
};

export default App;
