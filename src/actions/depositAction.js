import axios from './axios.js';
import Cookies from './js-cookie';


function changeTab(data) {
    return {
        type: 'CHANGE_TAB',
        data: data,
    };
}

export function getPkgsList(idx) {
    return (dispatch, getState) => {
        if(idx == 1){
            axios({
                method:'get',       //Cookies.get("userid")
                url:'http://bmapitest.com/enroll?event_id=1&limit=0,100&status=0&userid=57de062829faa96203352714'
            }).then(function(resp){
                console.log(resp);
                dispatch(changeTab(resp.data));
            }).catch(function(error){
                console.log(error);
            })
        }else{
            axios({
                method:'get',
                url:'http://bmapitest.com/enroll?event_id=1&limit=0,100&status=1&userid=57de062829faa96203352714'// + Cookies.get("userid")
            }).then(function(resp){
                console.log(resp);
                dispatch(changeTab(resp.data));
            }).catch(function(error){
                console.log(error);
            })
        }
    };
}