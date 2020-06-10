// 组件全局注册
import Vue from 'vue'

// 导入所有组件
import WInput from './input/WInput.vue'
// 如果有字体图表也需要导入.

const Components = [
  WInput
]
// 注册全局组件
Components.forEach(element => {
  Vue.component(element.name, element)
})
export default Vue
