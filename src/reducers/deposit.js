const initialState = {
        list : ['已交押金','未交押金'],
        contentlist:[
         {
         	realname:'赵四',
         	child_name:'叶腾飞',
         	mobile:'10086',
         	inviter_realname:'UHKTFR',
         	invite_num:'5',
         	status:'1'
     	},
       ],
        current:0
};

function deposit(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_TAB":
             return Object.assign({}, state, {contentlist: action.data.data});
        default:
            return state;
    }
}

export default deposit;
