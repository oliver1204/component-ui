import * as React from 'react';
// import { Sticky, Tabs } from '../../src';
const {  Sticky, Tabs  } = require("../../dist/component-ui.js");
import {
  State,
  Props
} from './interface';

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  state: State = {
    tabs: [{
      index: 0,
      name: '我评论的' 
    }, {
      index: 1,
      name: '我点赞的' 
    }],
    currentIndex: 0
  }
  choiceTabs = (whitch: number) => {
    if(whitch == undefined || whitch == null) return;
    let { currentIndex } = this.state;
    
    currentIndex = whitch;
    window.sessionStorage.setItem('EXAM_CURRENT_INDEX', JSON.stringify(whitch));

    this.setState({
      currentIndex
    });
  }
  render() {
    return (
      <Sticky>
        <Tabs 
          initIndex={this.state.currentIndex} 
          handleClick={this.choiceTabs}>
          {
            this.state.tabs.map((child: any, cindex: number) => {
              return (
                <Tabs.Item title={child.name} key={cindex}></Tabs.Item>
              )
            }) 
          }
        </Tabs>
      </Sticky>
      
    )
  }
};
export default App;
