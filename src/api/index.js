import http from './public'
 let url = 'http://ych.bluetimes.cn/';


//删除公司
export const departdelete = (params = {}) => {
    return http.fetchPost(url+'/api/depart/delete', params)
}
//根据roleid查角色详情
export const getrolexiangqing = (params) => {
    return http.fetchGet(url+'/api/userrole/getdetail/'+params)
}










