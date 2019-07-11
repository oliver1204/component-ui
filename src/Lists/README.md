### explain

* optional params
    hasMarginTop: string  -- 是否有空隙， top20, top30不需要自己写，其他样式需要自己写
 

* method
    onClick: function  -- 点击的时候的回调函数


### demo
类似更多一样的页面用list,
表单格式的用form
```js

import Lists from '../Components/ListsTemplate/index';


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

### Author
If you encounter any questions, please call me. 
my mail address is 348560971@qq.com.
@ziran.liu