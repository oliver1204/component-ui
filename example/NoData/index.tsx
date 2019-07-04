import * as React from 'react';
// import { NoData } from '../../src';
const {  NoData  } = require("../../dist/component-ui.js");

const App = () => {
  return (
    <NoData 
        main="您已提交试卷，人工阅卷中……"
        sub="您可等待阅卷结果消息或返回首页关注成绩动态"
        src={require("./images/empty.png")}></NoData>
  )
};

export default App;