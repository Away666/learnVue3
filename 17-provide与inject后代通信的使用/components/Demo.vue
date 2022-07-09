<template>
  <div>我是子组件</div>
  <son></son>
</template>

<script>
import { customRef, ref } from "vue";
import Son from "./son.vue";
export default {
  name: "Demo",
  components: { Son },
  setup(props, context) {
    return {
      
    };
  },
};
</script>
<style  scoped>
</style>