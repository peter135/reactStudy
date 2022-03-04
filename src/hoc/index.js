import React, { Component, useEffect, useRef } from 'react';


// 渲染劫持
// const HOC = (WrapComponent) => {
//     class Index extends WrapComponent {
//         render() {
//             if(this.props.visible){
//                 return super.render()
//             }else {
//                 return <div>暂无数据</div>
//             }

//         }
//     }
// }

// 修改渲染树
// class Index extends React.Component {
//     render(){
//         return <div>
//             <ul>
//                 <li>react</li>
//                 <li>vue</li>
//                 <li>angular</li>
//             </ul>
//         </div>
//     }
// }

// function HOC(component) {
//     return class Advance extends Index {
//         render(){
//             const element = super.render()
//             const otherProps = {
//                 name:'alien'
//             }

//             //替换angular元素节点
//             const appendElement = React.createElement('li' ,{} , `hello ,world , my name  is ${ otherProps.name }` );

//             const newchild =  React.Children.map(element.props.children.props.children,(child,index)=>{
//                        if(index === 2) return appendElement
//                        return  child
//                   }) 
//             return  React.cloneElement(element, element.props, newchild)
//         }
//     }
// }

// export  default HOC(Index)


//动态加载
// export default function dynamicHoc(loadRouter) {

//     return class Content extends React.Component {

//         state = {Component:null}
//         componentDidMount() {
//             if(this.state.Component) return
//             loadRouter()
//                 .then(module => module.default)
//                 .then(Component => this.setState({Component}))
//         }

//         render() {
//             const {Component} = this.state
//             return Component? <Component {...this.props} />:<Loading/>
//         }

//     }

// }

//组件赋能
// function Hoc(Component) {
//     return class WrapComponent extends React.Component {
//         constructor(){
//             super()
//             this.node = null /* 获取实例，可以做一些其他的操作。 */
//         }

//         render(){
//             return <Component {...this.props}  ref={(node) => this.node = node }  />
//         }

//     }

// }


// 事件监控
// function ClickHoc (Component) {
//     return function Wrap(props){
//         const dom = useRef(null)
//         useEffect(()=>{
//             const handerClick = () => console.log('发生点击事件') 
//             dom.current.addEventListener('click',handerClick)
//             return () => dom.current.removeEventListener('click',handerClick)

//         },[])

//         return  <div ref={dom}  ><Component  {...props} /></div>
//     }

// }

// @ClickHoc
// class Index extends React.Component{
//     render(){
//       return <div className='index'  >
//         <p>hello，world</p>
//         <button>组件内部点击</button>
//      </div>
//     }
//  }
//  export default ()=>{
//    return <div className='box'  >
//       <Index />
//       <button>组件外部点击</button>
//    </div>
//  }

//权限拦截
// export const Permisson = React.createContext([])

// export default function Index() {
    
//     const [rootPermission, setRootPermission] = React.useState([])
//     React.useEffect(()=>{
//         //获取权限列表
//         getRootPermission().then(res=>{
//             const{code, data} = res
//             code === 200 && setRootPermission(data)
//         })

//     },[])
//     return <Permission.Provider value={rootPermission} >
//         <RootRouter/>
//     </Permission.Provider>
// }

// function NoPermission() {

//     return <div>您暂时没有权限,请联系管理员开通权限!</div>
// }

// export function PermissionHoc(authorization){
//     return function(Component) {
//         return function Home (props){
//             const matchPermission =(value,list)=> list.indexOf(value) /* 匹配权限 */
//             return <Permission.Consumer>
//                 {
//                     (permissionList) => matchPermission(authorization,permissionList) >= 0 ? <Component  {...props} /> : <NoPermission />
//                 }
//             </Permission.Consumer>
//         }
//     }

// }

// @PermissionHoc('writeDoc')  // 绑定文档录入页面
// export default class Index extends React.Component{}

// export default PermissionHoc('writeTag')(index) //绑定标签录入页面


