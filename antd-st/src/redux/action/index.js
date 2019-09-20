export const type = {
    SWITCH_MENU:'SWITCH_MENU',
    CHANGE_NUM:'CHANGE_NUM',

}

export function switchMenu(menuName) {
    return {
        type:type.SWITCH_MENU,
        menuName:menuName
    }
}

export function addNum() {
    return {
        type:type.CHANGE_NUM,
        typeM:'reduce'
    }
}
 
export function reduceNum(){
    return {
        type:type.CHANGE_NUM,
        typeM:'add'
    }
}