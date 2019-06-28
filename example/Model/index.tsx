import * as React from 'react';
// import { Model, Toast, Switch } from '../../src';
const {  Model, Toast, Switch  } = require("../../dist/component-ui.js");

import "./index.css";
import {
  State,
  Props
} from './interface';

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  state: State = {
    checked: true
  }
  alert = () => {
    Model.show({
      title: 'alert 标题',
      content: 'alert 内容', 
      customContent: `<div class="title"> customContent </div>`,
      buttonText: '知道了',
      callback: () => {
        console.log('我是 callback!');
        return true; // 如果不期望弹窗关闭，则返回false, 否者忽略
      }
    });
  
  }
  confirm =() => {
    Model.show({
      type: 'confirm',
      title: 'confirm 标题',
      content: 'confirm 内容', 
      customContent: `<div class="title"> customContent </div>`,
      cancelButtonText: '不知道',
      successButtonText: '知道了',
      successCallback: () => {
        console.log('我是 successCallback');
        return true; // 如果不期望弹窗关闭，则返回false, 否者忽略
      },
      cancelCallback: () => {
        console.log('我是 cancelCallback');
        return true; // 如果不期望弹窗关闭，则返回false, 否者忽略
      }
    });
  }
  message = () => {
    Toast.show({
      message: '一条普通的消息',
    })
  }
  success = () => {
    Toast.show({
      type: 'success',
      message: '加载成功',
      duration: 100000
    })
  }
  failed = () => {
    Toast.show({
      type: 'failed',
      message: '加载失败'
    })
  }
  loading = () => {
    Toast.show({
      type: 'loading',
      message: '加载中..',
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.alert}> 我是Alert, 点我试试</button>
        <button onClick={this.confirm}> 我是Confirm, 点我试试</button>
        <button onClick={this.message}> 我是一条普通的消息, 点我试试</button>
        <button onClick={this.success}> 我是一条success消息, 点我试试</button>
        <button onClick={this.failed}> 我是一条failed消息, 点我试试</button>
        <button onClick={this.loading}> 我是一条loading消息, 点我试试</button>
        
        <Switch 
          onClick={(value: any) => {
            console.log(value)
            this.setState({
              checked: !this.state.checked
            })
          }}
          onChange={() => { 
            /* When the component changes... */ 
          }}
          checked={this.state.checked}  
          className='aaa'
          style={{display: 'block'}} 
        ></Switch>
        
      </div>
    )
  }
  
};

export default App;