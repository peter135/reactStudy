import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ListAction } from './list.action'

import './list.scss'
import '../../assets/fontawesome/css/all.css'
let placeholder = '请输入关键字'

export class ListPage extends React.Component{
  
    componentDidMount() {
      // this.props.actions.setList(videolist);

    }
  
    render() {
      // const {listDto} = this.props;

      return ( 
        <div className="list_area">
            <div className="title">列表一览</div>
            <div className="search">
              <i className="fas fa-search"/>
              <input type="search" className="search_area" placeholder={placeholder} />
            </div>
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
  