import * as React from 'react';
import { Footer } from '../../src';

const App = () => {
  return (
    <Footer>
        <Footer.Item
            type="primary"
            onClick={() => {}}>确定</Footer.Item>
        <Footer.Item
            onClick=""
          disabled={true}>取消</Footer.Item>    
      </Footer>
  )
};

export default App;