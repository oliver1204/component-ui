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
    onClick: null
  }

  constructor(props: Props) {
    super(props);

  }
  onClick(params?: any){
    this.props.onClick(params);
  }
  
}

export default Action;
