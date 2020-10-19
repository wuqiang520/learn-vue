import {observe} from './index'
export function defineReactive(data,key,value){
  //vue不支持ie8及以下版本
  //如果value仍然是一个对象，需要深度观察
  observe(value);
  Object.defineProperty(data,key,{
    get(){
      console.log('获取数据')
      return value
    },
    set(newValue){
      if(newValue === value){
        return
      }
      console.log('定义数据')
      value = newValue
    }
  });
}
class Observer {
  constructor(data){
    //data 就是刚才定义的vm._data
    console.log('observer-data')

    this.walk(data);
  }
  walk(data){
    let keys = Object.keys(data);
    console.log(keys);
    for(let i=0;i<keys.length;i++){
      let key = keys[i];
      let value = data[keys[i]];
      defineReactive(data,key,value);
    }
  }
}

export default Observer