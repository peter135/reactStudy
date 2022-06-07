import { push } from 'react-router-redux'

export class NavigationAction {  
    static actions = {
 
      pushMypage:()=> {
        return async (dispatcher) => {
          dispatcher(
            push('/page/mypage')
          )
        }
      },

      pushList:()=> {
        return async (dispatcher) => {
          dispatcher(
            push('/page/list')
          )
        }
      },

   }   

}
