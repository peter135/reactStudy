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

      pushSettings:()=> {
        return async (dispatcher) => {
          dispatcher(
            push('/page/settings')
          )
        }
      },

      pushUser:()=> {
        return async (dispatcher) => {
          dispatcher(
            push('/page/user')
          )
        }
      },
      

   }   

}
