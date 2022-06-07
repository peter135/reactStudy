import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { MyPageAction } from './mypage.action'
import MyRCFieldForm  from '@/components/forms/myRCFieldForm.js';


export class MyPage extends React.Component{
  
    componentDidMount() {
    }
  
    render() {
    //   const {homeDto} = this.props;
      return ( 
        <div className="contents">
            <MyRCFieldForm />
        </div>
      )
    }
      
  }
  
  function mapStateToProps(state) {
    return {
      homeDto: state.homeDto,
    }
  }
  
  export const MyPageContainer = connect(
    mapStateToProps,
    dispatch => ({ actions: bindActionCreators(MyPageAction.actions, dispatch) })
  )(MyPage)
  