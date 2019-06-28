import * as React from 'react';
const { Footer } = require("../../dist/component-ui.js");

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