import React, { Component } from "react";

export default class DebounceThrottle extends Component {

    constructor(props) {
        super(props);
        this.state = {
          inputValue: '',
          inputValue1: '',
        };
        this.debounceAjax = this.debounce(this.ajax, 1000)
        this.throttleAjax = this.throttle(this.ajax, 1000)
    }
      

    render() {
        return(
        <div>
            <div>
              <span>防抖功能input  </span>
              <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
            </div>
            <div style={{marginTop:10}}>
              <span>节流功能input  </span>
              <input value={this.state.inputValue1} onChange={evt => this.updateInputValue1(evt)}/>
            </div>
        </div>

        )
    }

    // 防抖演示
    updateInputValue(evt) {
        const val = evt.target.value;
        this.setState({
          inputValue: val
        });
        console.log('val',val)

        this.debounceAjax(val)

    }


    ajax= (content) => {

        var today =  new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        console.log('ajax request' + content + ' ' + h +':' + m + ':'+s)
    }

    // 防抖函数 输入停止后间隔delay时间后才执行
    debounce = (fun,delay) => {
        return function(args){
            let that = this
            let _args = args
            
            clearTimeout(fun.id)
            fun.id = setTimeout(() => {
                fun.call(that,_args)
            }, delay);

        }
    }

    // 节流演示
    updateInputValue1(evt) {
        const val = evt.target.value;
        this.setState({
          inputValue1: val
        });
        console.log('val1',val)

        this.throttleAjax(val)

    }


    throttle = (fun, delay) => {
        let last, deferTimer
        return function (args) {
            let that = this
            let _args = args
            let now = +new Date()
            if (last && now < last + delay) {
                clearTimeout(deferTimer)
                deferTimer = setTimeout(function () {
                    last = now
                    fun.call(that,_args)
                }, delay)
            }else {
                last = now
                fun.call(that,_args)
            }
        }
    }

}