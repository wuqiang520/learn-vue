import Observer from './observer'
export function initState(vm){
 console.log('init state')
 // 做不同的初始化操作
 let opts = vm.$options;
 if(opts.data){
    initData(vm);
 }
 if(opts.computed){
    initComputed(vm);
 }
 if(opts.watch){
    initWatch(vm);
 }
}
function proxy(vm,source,key){
  Object.defineProperty(vm,key,{
    get(){
      return vm[source][key]
    },
    set(newValue){
      return vm[source][key] = newValue
    }
  })
}
function initData(vm){
  //当用户传入数据，用Object.defineProperty重新定义
  let data = vm.$options.data; //用户传入的data
  data =vm._data = typeof data === 'function' ? data.call(vm) : data || {};
  for(let key in data){
    proxy(vm,'_data',key) //对vm上的取值和赋值操作代理到_data上
  }
  observe(vm._data);

}
function initComputed(vm){

}
function initWatch(vm){

}
export function observe(data){
  if(typeof data!=='object'|| data==null){
    return;
  }
  return new Observer(data);
}