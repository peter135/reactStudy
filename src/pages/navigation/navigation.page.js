import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavigationAction } from './navigation.action'
import styles from './navigation.module.scss'

import personImg from '../../assets/img/person.png'
import listImg from '../../assets/img/list.png'
import { Pages } from '@/router/index'

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
        <div className={styles.contents}>
            <div className={styles.sidebar}>
              <div className={styles.sidebar_menu}>
                <div className={location.pathname.match(/list/) ? `${styles.sidebar_menu_item} ${styles.active}` : styles.sidebar_menu_item}
                     onClick={()=>this.pushList()}>
                  <img alt="" className={styles.icon} src={listImg} />
                </div>
                <div className={location.pathname.match(/mypage/) ? `${styles.sidebar_menu_item} ${styles.active}`  : styles.sidebar_menu_item}
                     onClick={()=>this.pushMypage()}>
                  <img alt="" className={styles.icon} src={personImg} />
                </div>
              </div>
            </div>
            <div className={styles.contents_area}>
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
