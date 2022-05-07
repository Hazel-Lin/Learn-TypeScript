/**
 * k 必须在T中 用extend 对k进行约束
 * 声明一个函数类型
 * keyof 遍历类型中的所有类型
 * interface Person {
  name:string,
  age:number
}

let a: keyof Person = 123
 */
type MyPick<T, K extends keyof T> = {
  [P in K]:T[P]
}




/*根据case的理解 写js代码
1.返回一个对象
2.对象中的key都在todo对象中
*/
// function MyPick(todo,key) {
//   let obj = {}
//   if(key in todo){
//     key.forEach((el) => {
//       obj[el] = todo[el]
//     });
//   }
 
//     return obj
// }
