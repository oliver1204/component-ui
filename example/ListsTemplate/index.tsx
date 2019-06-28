import * as React from 'react';
import { ListsTemplate } from '../../src';

const App = () => {
  return (
    <>
      <p>以下是list</p>
      <ListsTemplate hasMarginTop={"top30"}>
        <ListsTemplate.List handleClick={() => {}}>
          <div className="lineH">
            <i className="theme icon"></i>
            <span className="ls">我的话题</span>
          </div>
          <div className="drop">
          <span className="ls">我的话题</span>
            <i></i>
          </div>
        </ListsTemplate.List>
        <ListsTemplate.Form></ListsTemplate.Form>
    </ListsTemplate>   
    </>
  )
};

export default App;