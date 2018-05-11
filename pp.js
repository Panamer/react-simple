import * as types from './types.js';
import axios from 'utils/axios.js';

function storePkgs(data) {
    return {
        type: types.GET_PKGS_LIST,
        data: data
    };
}

function storePkgsSearch(data) {
    return {
        type: types.PKGS_SEARCH,
        data: data
    };
}

function nginxIp(data) {
    return {
        type: types.GET_IP,
        data: data
    };
}

function languageTypeA(data) {
    return {
        type: types.LANGUAGE_TYPE,
        data: data
    };
}

function currentIndex(data) {
    return {
        type: types.CURRENT_INDEX,
        data: data
    };
}

export function getPkgsList() {
    return (dispatch, getState) => {
      console.log(3333)
        const nginxIp = getState().storeManage.nginxIp;
        const languageType = getState().storeManage.languageType.toLowerCase();
        console.log(languageType)
        axios({
          method: 'post',
          url: '/pkg/getNexusPkgs',
          headers: {
              "Content-Type": "application/json",
              "I-HOST": nginxIp,
              "I-PORT": "5052"
          },
          data: {
            kernal: languageType
          }
        })
        .then(function (ret) {
            dispatch(storePkgs(ret.data));
        });
    };
}