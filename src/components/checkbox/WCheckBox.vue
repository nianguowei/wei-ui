<template>
  <div>
    <span>
      <input type="checkbox" :checked="checked" @change="onChange"/>
    </span>
    <span v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  methods: {
    onChange (e) {
      this.$emit('change', e.target.checked)
    }
  }
}
</script>
