以下是目前总结的组件：

* [Footer](#Footer)
* [Lists](#Lists)
* [LoadMore](#LoadMore)
* [Model](#Model)
* [NoData](#NoData)
* [Sticky](#Sticky)
* [Switch](#Switch)
* [Tabs](#Tabs)
* [Toast](#Toast)

<h2 id="Footer"> Footer </h2>

### explain

| 必选参数 | 可选参数  | 方法  | 
|---|---|---|
|   |  disabled， boolean --组件设置成灰色，但是方法中自己处理 | onClick， 回调函数  | 
|   | className（string），样式 |   |
|   | type（string），primary(蓝色框白底蓝字), default(蓝底白字), warning(橙色底白字)  |   | 


### demo

```js

const { Footer } = require('../require('../../Modules/component-ui.js')');

let topicLists =  [1, 3, 4, 6] 

<Footer>
    <Footer.Item
        type="primary"
        onClick={() => {}}></Footer.Item>
    <Footer.Item
        callback=""
        onClick={true}></Footer.Item>  
</Footer>

```  


<h2 id="Lists"> Lists </h2>

### explain
|可选参数  | 方法  | 
|---|---|
| hasMarginTop(string), 是否有空隙， top20, top30不需要自己写，其他样式需要自己写 | onClick, 点击的时候的回调函数  |

### demo

类似更多一样的页面用list,
表单格式的用form

```js

const { ListsTemplate } = require('../require('../../Modules/component-ui.js')');


<Lists hasMarginTop={"top30"}>
    <Lists.List onClick={this.toJump.bind(this, 'postMessage')}>
        <div className="lineH">
            <i className="theme icon"></i>
            <span className="ls">我的话题</span>
        </div>
        <div className="drop">
            {
                parseInt(info.topicNum) !== 0 ? <span>{info.topicNum}</span> : ''
            }
            <i></i>
        </div>
    </Lists.List>
    <Lists.Form></Lists.Form>
</Lists>   

```  

<h2 id="LoadMore"> LoadMore </h2>

### explain
| 必选参数 | 可选参数  | 方法  | 
|---|---|---|
| hasLoaderMore(boolean), 是否还有更多内容 |  LoadMoreParams(any),  回调函数需要参数时使用 | loadMore, 回调函数  | 
|   | className(string): 样式  |   |

### demo

```js

const { LoadMore } = require('../require('../../Modules/component-ui.js')');

let topicLists =  [1, 3, 4, 6] 

<LoadMore 
    className="topicLists"
    hasLoaderMore={this.data.hasMoreMa} 
    loadMore={this.getTopicLists.bind(this)} 
    LoadMoreParams={this.state.currentTab.typeId}
>
    {
        topicLists.map((item, index) => {
            return (
                <div  key={index}>
                    {item}
                </div>
            );
        })
    }
</LoadMore>

```

<h2 id="Model">Model</h2>

### explain
| Alert 和 Confirm 公共可选参数 | Alert 独有可选参数  | Confirm 独有可选参数  | 
|---|---|---|
| type(string), Alert or Confirm  default Alert  | callback, 回调函数  | successCallback , 成功时调用的回调函数| 
| title(string), Model's title |  buttonText, 文案， 默认为「确定」   | cancelCallback, 失败时调用的回调函数  |
| content(string), Model's content |   | successButtonText, 右边 button 文案， 默认为「确定」  | 
| customContent(string), 自定义的内容 |   | cancelButtonText, 左边 button 文案， 默认为「取消」  | 

### demo -- Alert

```js
const { Model } = require('../require('../../Modules/component-ui.js')');

Model.show({
  title: 'alert 标题',
  content: 'alert 内容', 
  customContent: `<div class="title"> customContent </div>`,
  buttonText: '知道了',
  callback: () => {
    console.log('我是 callback!');
    return false; // 如果不期望弹窗关闭，则返回false, 否者忽略
  }
});

```

### demo -- Confirm

```js

Model.show({
  type: 'confirm',
  title: 'confirm 标题',
  content: 'confirm 内容', 
  customContent: `<div class="title"> customContent </div>`,
  cancelButtonText: '不知道',
  successButtonText: '知道了',
  successCallback: () => {
    console.log('我是 successCallback');
    return false; // 如果不期望弹窗关闭，则返回false, 否者忽略
  },
  cancelCallback: (): void => {
    console.log('我是 cancelCallback');
    return false; // 如果不期望弹窗关闭，则返回false, 否者忽略
  }
});

```

### demo -- 手动关闭弹窗

```js

Model.hide();

```

<h2 id="NoData">NoData</h2>

### explain
|可选参数  | 方法  | 
|---|---|
| src(string), 图片 |   | 
| main(string), 主要内容（字体为黑色） |   |
| sub(string), 次要内容（字体为灰色） |   |

### demo

```js

const { NoData } = require('../require('../../Modules/component-ui.js')');

 <NoData 
    main="您已提交试卷，人工阅卷中……"
    sub="您可等待阅卷结果消息或返回首页关注成绩动态"
    src={require("./images/empty.png")}></NoData>

``` 

<h2 id="Sticky">Sticky</h2>

### explain
|可选参数  | 
|---|
|  stickyTop（number），tabs 距顶部的距离 |   
|  zIndex（string），z-index 值 |      
 
### demo

```js
const { Sticky } = require('../require('../../Modules/component-ui.js')');

let tabs = [{
  index: 0,
  name: '我评论的' 
}, {
  index: 1,
  name: '我点赞的' 
}];

<Sticky>
  <div className={`tabs top_1px_line  bottom_1px_line ${state.isShowMore ? 'moreTabs' : ''}`}>
    {
      typeList.map((item, index) => {
        return (
          <div onClick={this.changeTab.bind(this, item)} className={`tab ${item.isAction ? (state.isShowMore ? 'activeTab moreActiveTab' : 'activeTab') : ''}`} key={item.typeId}>
            {item.name}
          </div>
        );
      })
    }
  </div>
</Sticky>

``` 

<h2 id="Switch">Switch</h2>

### explain
| 可选参数  | 方法  | 
|---|---|
| checked(boolean), 默认是否开启, 默认ture | onClick, click事件触发的回调函数  | 
| disabled(boolean), 是否不可修改, 默认false  | onChange, change 事件触发的回调函数  |   
| className(string), 添加的独有样式 |   | 
| style(React.CSSProperties), 添加的独有样式  |   |   
| platform(string),兼容本公司pc端样式, 默认移动端, 如果pc ,可传人"pc"  |   | 


### demo

```js
const { Switch } = require('../require('../../Modules/component-ui.js')');

 <Switch 
  onClick={(value) => {
    console.log(value)
    this.setState({
      checked: !this.state.checked
    })
  }}
  onChange={() => { 
    /* When the component changes... */ 
  }}
  checked={this.state.checked}
  disabled   
  className='aaa'
  style={{display: 'block'}} 
></Switch>

```  


<h2 id="Tabs">Tabs</h2>

### explain
| 必选参数 | 可选参数  | 方法  | 
|---|---|---|
| initIndex（number），初始tab  | tabsClass（string）， tab group 的样式  | onClick， 点击tab的时候的回调函数  | 
|   | tabClass（string）， tab 的样式， 若填则采用默认样式  |   |

### demo

```js
const { Tabs } = require('../require('../../Modules/component-ui.js')');

let tabs = [{
  index: 0,
  name: '我评论的' 
}, {
  index: 1,
  name: '我点赞的' 
}];
let currentIndex = 0;

function choiceTabs(index: number | string) {
  this.setState({
    currentIndex: index
  })
}

<Tabs
  initIndex={this.state.currentIndex} 
  onClick={this.choiceTabs.bind(this)}>
  {
    pthis.state.tabs.map((child, cindex) => {
      return (
        <TabsControl.Item title={child.name} key={cindex}></TabsControl.Item>
      )
    }) 
  }
</TabsControl>

```  


<h2 id="Toast">Toast</h2>

### explain
| 必选参数 | 可选参数  | 
|---      |---      |
| type（string）， 默认message, 其他类型 loading, success, failed  | message（string）， 展示文案  | 
| duration（number）， 展示的秒数, 单位秒, 默认1.5秒 |   |   |


### demo

```js
const { Toast } = require('../require('../../Modules/component-ui.js')');
// message
Toast.show({
  message: '一条普通的消息',
})

// success
Toast.show({
  type: 'success',
  message: '加载成功'
})

// failed
Toast.show({
  type: 'failed',
  message: '加载失败'
})

// loading
Toast.show({
  type: 'loading',
  message: '加载中..',
})

/*
  * ps: loading 没有定时关闭功能，
  * 需要手动关闭, 关闭方法如下：
*/ 
Toast.hide()

```



