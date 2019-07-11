import * as React from 'react';
import { Lists } from '../../src';

const App = () => {
  return (
    <>
      <p>以下是list</p>
      <Lists hasMarginTop={"top30"}>
        <Lists.List onClick={() => {}}>
          <div className="lineH">
            <i className="theme icon"></i>
            <span className="ls">我的话题</span>
          </div>
          <div className="drop">
          <span className="ls">我的话题</span>
            <i></i>
          </div>
        </Lists.List>
        <Lists.Form></Lists.Form>
    </Lists>   
    </>
  )
};

export default App;