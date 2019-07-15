import * as React from 'react';
const { Footer } = require("../../dist/component-ui.js");

// import Footer from '../../src/Footer/index';

const App = () => {
  return (
    <Footer>
        <Footer.Item
            type="warning"
            callback={() => {}}>确定</Footer.Item>
        <Footer.Item
            callback=""
          disabled={true}>取消</Footer.Item>    
      </Footer>
  )
};

export default App;