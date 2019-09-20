/**
 * 
 * 
 */
import {type} from './../action'
 const initialState ={
     menuName:"首页sun"
 }

export default (state=initialState,action)=>{
   switch (action.type) {
       case 'SWITCH_MENU':
           return {
               ...state,
               menuName:action.menuName
           }
           break;
   
       default:
           return state;
   }

}
