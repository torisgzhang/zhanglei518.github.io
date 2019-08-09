import React from 'react';
import { Spin } from 'antd';

const Loading = () => {
  return (
    <div style={{width: '100%', height: '100vh', lineHeight: '100vh', textAlign: 'center'}}>
      <Spin size="large" />
    </div>
  );
}

export default Loading;