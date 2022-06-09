import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { NavigationAction } from './navigation.action'
import styles from './navigation.module.scss'

import { Pages } from '@/router/index'
import '@/assets/fontawesome/css/all.css'

export class NavigationPage extends React.Component {

  pushList() {
    this.props.actions.pushList()
  }

  pushMypage() {
    this.props.actions.pushMypage()
  }

  pushSettings() {
    this.props.actions.pushSettings()

  }

  render() {
    const { location} = this.props
    return (
        <div className={styles.contents}>
            <div className={styles.sidebar}>
              <div className={styles.sidebar_menu}>
                <div className={location.pathname.match(/list/) ? `${styles.sidebar_menu_item} ${styles.active}` : styles.sidebar_menu_item}
                     onClick={()=>this.pushList()}>
                    <i className={`fas fa-bars fa-lg `} style={{color:'#fff'}}></i>
                </div>
                <div className={location.pathname.match(/mypage/) ? `${styles.sidebar_menu_item} ${styles.active}`  : styles.sidebar_menu_item}
                     onClick={()=>this.pushMypage()}>
                    <i className={`fas fa-home fa-lg `} style={{color:'#fff'}}></i>
                </div>
                <div className={location.pathname.match(/settings/) ? `${styles.sidebar_menu_item} ${styles.active}` : styles.sidebar_menu_item}
                     onClick={()=>this.pushSettings()}>
                    <i className={`fas fa-gem fa-lg `} style={{color:'#fff'}}></i>
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
