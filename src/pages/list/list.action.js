import { ListTypes } from '../../common/list.dto'

export class ListAction {  
    static actions = {
 
     setList:(list) => {
       return async (dispatcher) => {
         dispatcher(
           { type: ListTypes.SET_LIST, list: list }
         )
       }
     }
   }   

}
