type Push<T extends any[], U> = [...T,U]


// js 数组不区分类型
function push(T,U){
  let arr:any[] = []
  if(Array.isArray(T)){
    arr = [...T,U]
  }
  return arr
}