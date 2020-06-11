<template>
    <div>
        <!-- 自定义组件要实现v-model必须实现:value, @input -->
        <!-- $attrs存储的是props之外的部分 -->
        <!-- {type:'password'} -->
        <input :value="value" @input="onInput" v-bind="$attrs">
        <span v-if="value" class="cursor">
          <i @click="clear">x</i>
        </span>
    </div>
</template>

<script>
import emitter from '../../mixins/emitter'
export default {
  name: 'UIInput',
  componentName: 'UIInput',
  mixins: [emitter],
  inheritAttrs: false, // 避免顶层容器继承属性
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput (e) {
      // 通知父组件数值变化
      this.$emit('input', e.target.value)

      // 通知FormItem校验
      // this.$parent.$emit('validate')
    },
    clear () {
      this.$emit('input', '')
    }
  }
}
</script>

<style lang="scss" scoped>
  .cursor {
    margin-left: -12px;
    cursor: pointer; /*鼠标悬停变小手*/
  }
</style>
