<template>
  <div>
    <WInput v-model="model.value"></WInput>
    {{ model.value }}
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
        value: 'tom'
      }
    }
  }
}
</script>
