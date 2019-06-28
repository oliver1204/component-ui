import * as React from 'react';

import {
  Props
} from './interface';

import Action from './action';

class List extends Action {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className='list bottom_1px_line' onClick={this.handleClick.bind(this)}>
        {this.props.children} 
      </div>
    );
  }
}

export default List;