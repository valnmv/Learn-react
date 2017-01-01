import { polyfill } from 'es6-promise';
import request from 'axios';

polyfill();

export function callApi(method, id, data, api) {
  return request[method](api + (id ? ('/' + id) : ''), data);
}

export function deleteTodoAction(state, id) {
  callApi('get', 0, { id: 5, text: "from api"}, '/api/todo').then(res => {
    if (res.status === 200) {
        return res.status;
    }
  })
  .catch(() => {
    return { id, error: 'Oops!' }
  });
}
