import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavigationAction } from './navigation.action'
import './navigation.scss'

import personImg from '../../assets/img/person.png'
import listImg from '../../assets/img/list.png'
import { Pages } from '@/router/index'

let address = '地址123';
let name = '用户123';

export class NavigationPage extends React.Component {

  pushList() {
    this.props.actions.pushList()
  }

  pushMypage() {
    this.props.actions.pushMypage()
  }

  render() {
    const { location} = this.props
    return (
        <div className="contents">
            <div className="sidebar">
              <div className="sidebar_menu">
                <div className={location.pathname.match(/list/) ? 'sidebar_menu_item active' : 'sidebar_menu_item'}
                     onClick={()=>this.pushList()}>
                  <img alt="" className="icon" src={listImg} />
                </div>
                <div className={location.pathname.match(/mypage/) ? 'sidebar_menu_item active' : 'sidebar_menu_item'}
                     onClick={()=>this.pushMypage()}>
                  <img alt="" className="icon" src={personImg} />
                </div>
              </div>
            </div>
            <div className="contents_area">
              <Pages/>
            </div>
        </div>
    )
  }
}

export const NavigationContainer = connect(null,
  (dispatch) => ({ 
    actions: bindActionCreators(NavigationAction.actions, dispatch),
  })
)(NavigationPage)
