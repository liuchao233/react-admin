// const delay = require('mocker-api/lib/delay');

// // 是否禁用代理
// const noProxy = process.env.NO_PROXY === 'true';
// const { list } = require('./components/table');

// console.log('list', list)

// function loadData(data) {
//   const result = {};
//   Object.keys(data).forEach((key) => {
//     result[key] = require(data[key]).default;
//   });
//   return result;
// }

// const proxy = loadData({
//   'GET /user': './db/user',
//   'GET /user/info': './db/userInfo',
//   'GET /userinfo/:id': './db/userInfo',
//   'OPTIONS /user/info': './db/userInfo',
// });

// module.exports = (noProxy ? {} : delay(proxy, 1000));

import delay from 'mocker-api/lib/delay';
import { list } from './components/table';
// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

console.log('list', list)

const proxy = {
  // 'GET /user': require('./db/user').default,
  'GET /components/table/list': list,
}

export default noProxy ? {} : delay(proxy, 1000)