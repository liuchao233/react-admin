const delay = require('mocker-api/lib/delay');

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

function loadData(data) {
  const result = {};
  Object.keys(data).forEach((key) => {
    result[key] = require(data[key]).default;
  });
  return result;
}

const proxy = loadData({
  'GET /user': './db/user',
  'GET /user/info': './db/userInfo',
  'GET /userinfo/:id': './db/userInfo',
  'OPTIONS /user/info': './db/userInfo',
});

module.exports = (noProxy ? {} : delay(proxy, 1000));