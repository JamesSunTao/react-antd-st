/**
 * 
 * 
 */
import {type} from './../action'
 const initialState ={
     menuName:"首页sun",
     number:0
 }

export default (state=initialState,action)=>{
   switch (action.type) {
        case type.SWITCH_MENU:
            return {
                ...state,
                menuName:action.menuName
            }
            break;
        
        case type.CHANGE_NUM:
            if(action.typeM==='add'){
                state.number<1?state.number=10:state.number--;
            }else{
                state.number>10?state.number=0:state.number++;
            }            
            return {
                ...state,
                number:state.number
            }
            break;
        default:
            return state;
   }

}
