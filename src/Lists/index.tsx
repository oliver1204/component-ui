import * as React from 'react';

import {
  Props,
} from './interface';
import Action from './action';
import Form from './Form/index';
import List from './List/index';

import './index.css';

class ListsModel extends Action {
  static Form = Form
  static List = List
  constructor(props: Props) {
    super(props);
  }

  render() {
    let pthis = this;
    return (
      <div 
        className = {`ListsModel ${this.props.className ? this.props.className : ''}`} 
        key = {pthis.props.keys ? pthis.props.keys : 0}
      >
        {
          (() => {
            if(pthis.props.hasMarginTop) {
              return <div className={pthis.props.hasMarginTop}></div>;
            }
          })()
        }
        <div className="line bottom_1px_line"></div>
        <div className="reactWraps">
          {
            React.Children.map(this.props.children, (children: JSX.Element, index: number) => {
              return (
                <>
                  {children}
                </>
              );
            })
          }
        </div>
        <div className="line top_1px_line"></div>
      </div>
    );
  }
}

export default ListsModel;