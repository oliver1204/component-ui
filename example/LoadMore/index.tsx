import * as React from 'react';
import { LoadMore } from '../../src';
import {
  State,
  Props,
  Data
} from './interface';

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  state: State = {
    topicLists: [1, 3, 4, 5, 6,7,8,8,8,8,9,0,0],
    currentTab: {
      typeId: 0,
      name: '111'
    }
  }
  data: Data = {
    hasMore: true,
    isPending: false,
    hasMoreMap: {},
    topicListsMap: {},
    page: {}
  }
  getTopicLists = (typeId: number) => {
    if(this.data.isPending) return;

    this.data.isPending = true;

    if (this.data.hasMoreMap[typeId] === false) {
      this.setState({
          topicLists: this.data.topicListsMap[typeId],
      });
      this.data.isPending = false;
      return;
    }

    this.data.page[typeId] = this.data.page[typeId] ? this.data.page[typeId] : 1;
    let _this = this;
    setTimeout(() => {
      _this.data.isPending = false;
      _this.data.topicListsMap[typeId] = _this.data.topicListsMap[typeId] ? _this.data.topicListsMap[typeId] : [];
      _this.data.topicListsMap[typeId] = _this.data.topicListsMap[typeId].concat(_this.state.topicLists);
      _this.setState({
        topicLists: _this.data.topicListsMap[typeId]
      })
    }, 0)
    
  }
  render() {
    let { topicLists } = this.state;

    return (
      <LoadMore 
        classN="topicLists"
        hasLoaderMore={this.data.hasMoreMap[this.state.currentTab.typeId]} 
        loadMore={this.getTopicLists.bind(this)} 
        LoadMoreParams={this.state.currentTab.typeId}
      >
        {
          topicLists.map((item: number, index: number) => {
            return (
              <div  key={index}>
                {item}
              </div>
            );
          })
        }
      </LoadMore>
      
    )
  }
  
};

export default App;
