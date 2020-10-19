import {initState} from '../observe/index'
function Vue(options){ //构造函数
  console.log(options)
  this._init(options); //初始化vue,将用户选项传入
}
Vue.prototype._init = function(options){
  //vue中的初始化 this.$options 
  let vm = this; //当前实例
  vm.$options = options;
  initState(vm); //data computed watch
  console.log(vm)
}

export default Vue