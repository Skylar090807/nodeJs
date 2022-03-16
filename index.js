//calc.js에서 exports된 모듈을 require.
//module.export와 require는 node.js에서만 사용 가능
const calc = require('./calc')

console.log(calc.add(1, 2))
console.log(calc.add(4, 9))
console.log(calc.sub(3, 2))
console.log(calc === {}) //false
