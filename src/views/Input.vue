<template>
  <div>
    <WInput v-model="model.value"></WInput>
    双向绑定值：{{ model.value }}
  </div>
</template>

<script>
import WInput from '../components/input/WInput'

export default {
  components: {
    WInput
  },
  data () {
    return {
      model: {
        value: ''
      }
    }
  }
}
</script>
