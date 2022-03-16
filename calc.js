//계산 기능

const add = (a, b) => a + b
const sub = (a, b) => a - b

//node.js 에서는 모듈을 객체단위로 export할 수 있다.
module.exports = {
  moduleName: 'calc module',
  add: add,
  sub: sub,
}
