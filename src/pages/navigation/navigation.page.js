import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { NavigationAction } from './navigation.action'
import { ListPageContainer } from '../list/list.page'
import { MyPageContainer } from '../mypage/mypage.page'
import './navigation.css'

import personImg from '../../assets/img/person.png'
import listImg from '../../assets/img/list.png'

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
          <div className="header">
            <div className="header_content">
              <div className="header_content_profile">
                  <div>
                    <span className="name">{name}</span>
                    <br/>
                    <span className="address">{address}</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="body">
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
              <Switch>
                <Route exact={true} path="/page/list" component={ListPageContainer} />
                <Route exact={true} path="/page/mypage" component={MyPageContainer} />
              </Switch>
            </div>
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
