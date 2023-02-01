interface IConfig {
  port: number;
  host: string;
}

let config: IConfig = {
  port: 3000,
  host: 'localhost'
}

// type IConfigKeys = {
//   name:string;
// }



type IConfigKeys = keyof IConfig;

let obj2: IConfigKeys = 'port';


// 通过{} 可以定义类型 但无法对类型赋值
let abc:{} = {name:'abc'}

abc.name = 'test'

// 字面量类型
let a:'321' = '321'
a = '123'

const aaa = (name:string): number =>  {
  return 1
}

// 函数类型
const q = (age:number): number => {
  return 10
}

const foo : (age:number) => number = (age) =>{
  return 10
}

