import request from '../service/request';

export const fetchData = query => {
    return request({
        url: '/examination/api/tjyy/physicalExamination/tableJson',
        method: 'get',
        params: query
    });
};
