import { MyTypes } from '../../common/mypage.dto'

export class MyPageAction {  
    static actions = {
 
     setMe:(me) => {
       return async (dispatcher) => {
         dispatcher(
           { type: MyTypes.SET_ME, me: me }
         )
       }
     }
   }   

}
