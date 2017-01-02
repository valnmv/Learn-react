import { polyfill } from 'es6-promise';
import request from 'axios';

polyfill();

export function callApi(method, id, data, api) {
  return request[method](api + (id ? ('/' + id) : ''), data);
}
