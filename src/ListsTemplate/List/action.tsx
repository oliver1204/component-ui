/*
  loaderMore： 加载更多ajax 函数
  hasLoaderMore：是否还有更多的内容需要加载
*/

import * as React from 'react';

import {
  State,
  Props
} from './interface';
//Main
class Action extends React.Component<Props, State> {
  static defaultProps: Props = {
    handleClick: null
  }

  constructor(props: Props) {
    super(props);

  }
  handleClick(params?: any){
    this.props.handleClick(params);
  }
  
}

export default Action;
