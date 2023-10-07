/* eslint-disable no-console */
import React from 'react';
import { Button } from 'antd';
import { getLoginQrCKey } from './api';

function fn() {
  getLoginQrCKey()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
function App() {
  return (
    <div>
      <h1 className="text-red-300 text-[30px]">hello world!</h1>
      <Button type="primary" onClick={fn}>
        按钮
      </Button>
    </div>
  );
}

export default App;
