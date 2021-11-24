import request from '../service/request';
import api from '../service/api';

export const fetchOrderList = query => {
    return request({
        url: api.getExaminationOrderList,
        method: 'GET',
        params: query
    });
};
