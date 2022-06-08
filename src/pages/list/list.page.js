import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ListAction } from './list.action'

import styles from  './list.module.scss'
import '../../assets/fontawesome/css/all.css'

export class ListPage extends React.Component{
  
    componentDidMount() {

    }
  
    render() {

      return ( 
        <div className={styles.list_area}>
             <h1>ListPage</h1>
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
  