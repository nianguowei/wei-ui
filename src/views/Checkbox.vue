<template>
  <div>
    <WCheckBox label="复选1" v-model="model.value1"></WCheckBox>
    <WCheckBox label="复选2" v-model="model.value2"></WCheckBox>
    复选1：{{ model.value1 }}---复选2：{{ model.value2 }}
  </div>
</template>

<script>
import WCheckBox from '../components/checkbox/WCheckBox'

export default {
  components: {
    WCheckBox
  },
  data () {
    return {
      model: {
        value1: false,
        value2: false
      }
    }
  }
}
</script>
