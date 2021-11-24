import request from '../service/request';
import api from '../service/api';

/**
 * 
 * @param username 
 * @param password 
 * @returns 
 */
export const loginByPass = query => {
    return request({
        url: api.userLogin,
        method: 'POST',
        data: query
    });
};
export const fetchData = query => {
    return request({
        url: '/examination/api/tjyy/physicalExamination/tableJson',
        method: 'GET',
        params: query
    });
};
