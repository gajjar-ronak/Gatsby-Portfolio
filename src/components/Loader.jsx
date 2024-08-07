import React from 'react';
import { Spin } from 'antd';

const Loader = () => {
  return (
    <div className="loader" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Spin size="large" />
    </div>
  );
};

export default Loader;

