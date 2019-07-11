/*
  
*/

import * as React from 'react';
import Tab from './Tab/index';

import {
  State,
  Props,
} from './interface';
//Main
class Action extends React.Component<Props, State> {
  state: State = {
    currentIndex: 0,
    flag: false
  }
  static Item = Tab;

  static defaultProps: Props = {
    initIndex: 0,
    onClick: null
  }

  constructor(props: Props) {
    super(props);
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if(prevState.currentIndex !== nextProps.initIndex) {
      if(!prevState.flag) { // 初始化的时候在这负值，组件更新时候的变化都放shouldComponentUpdate中
        prevState.currentIndex = nextProps.initIndex;
      }
      return prevState;
    }
    return null;  
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    if(nextProps.initIndex === nextState.currentIndex) return false;
    nextState.currentIndex = nextProps.initIndex;
    return true;
  }

  componentDidMount() {
    let pthis = this;
    
    this.setState({
      currentIndex: pthis.props.initIndex,
      flag: true
    });
    this.props.onClick(pthis.props.initIndex);
  }

  componentDidUpdate(props: Props, state: State) {    
    this.setState({
      currentIndex: props.initIndex
    });
  }  
    
  getCurrentTitleClasses(index: number){
    return `tab-title-item ${this.props.tabsClass ? this.props.tabsClass : ''} ${index === this.state.currentIndex ? 'active' : ''}`;
  }
    
  getCurrentItemClasses(index: number){
    return index === this.state.currentIndex ? "tab-content-item active" : "tab-content-item";
  }
  onClick(index: number){
    this.props.onClick(index);
  }
  
}

export default Action;
