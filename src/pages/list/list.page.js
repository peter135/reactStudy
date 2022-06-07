import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ListAction } from './list.action'
import { List, ListItem }  from '@material-ui/core'

import './list.css'
import '../../assets/fontawesome/css/all.css'
import listImg from '../../assets/img/list.png'

let placeholder = '请输入关键字'
let videolist = [ 
{detail:'测试详情，测试详情，测试详情，测试详情'},
{detail:'测试详情，测试详情，测试详情，测试详情'},
{detail:'测试详情，测试详情，测试详情，测试详情'},
{detail:'测试详情，测试详情，测试详情，测试详情'},
{detail:'测试详情，测试详情，测试详情，测试详情'},
{detail:'测试详情，测试详情，测试详情，测试详情'},
{detail:'测试详情，测试详情，测试详情，测试详情'},
{detail:'测试详情，测试详情，测试详情，测试详情'},
{detail:'测试详情，测试详情，测试详情，测试详情'},
{detail:'测试详情，测试详情，测试详情，测试详情'},
{detail:'测试详情，测试详情，测试详情，测试详情'},
{detail:'测试详情，测试详情，测试详情，测试详情'},
{detail:'测试详情，测试详情，测试详情，测试详情'}]

export class ListPage extends React.Component{
  
    componentDidMount() {
      this.props.actions.setList(videolist);

    }
  
    render() {
      const {listDto} = this.props;

      return ( 
        <div className="list_area">
            <div className="title">列表一览</div>
            <div className="search">
              <i className="fas fa-search"/>
              <input type="search" className="search_area" placeholder={placeholder} />
            </div>
            <List className="list">
             { listDto.videoList && listDto.videoList.length>0 
              && listDto.videoList.map((message, index) => {
              return (
                <div key={index} className={'each_detail'}>
                  <ListItem>
                      <span className={'detail_text'}>{message.detail}</span>
                  </ListItem>
                </div>
              )
            })}
            </List>
        </div>
      )
    }
      
  }
  
  function mapStateToProps(state) {
    return {
      listDto: state.listDto,
    }
  }
  
  export const ListPageContainer = connect(
    mapStateToProps,
    dispatch => ({ actions: bindActionCreators(ListAction.actions, dispatch) })
  )(ListPage)
  