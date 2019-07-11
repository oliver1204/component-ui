import * as React from 'react';

import {
  Props,
} from './interface';
//Main
class Action extends React.Component<Props> {
  static defaultProps: Props = {
    loadMore: null
  }

  constructor(props: Props) {
    super(props);
  }
  
  componentWillUnmount() {
    let pthis = this;
    
  } 
  
}

export default Action;