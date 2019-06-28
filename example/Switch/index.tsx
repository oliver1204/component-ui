import * as React from 'react';
import { Footer } from '../../src';

const App = () => {
  return (
    <Footer>
        <Footer.Item
            type="primary"
            callback={() => {}}>确定</Footer.Item>
        <Footer.Item
            callback=""
          disabled={true}>取消</Footer.Item>    
      </Footer>
  )
};

export default App;