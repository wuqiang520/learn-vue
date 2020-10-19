import bar from './bar'
import Vue from 'vue'
let vm = new Vue({
  el:'#app',
  data(){
    return { //Object.definedproperty
      msg:'hello',
      school:{name:'zf'},
      arr:[1,2,3]
    }
  },
  computed:{

  },
  watch:{

  }
})
// vm.msg = vm._data.msg //代理
console.log(vm.msg ='100')
bar();