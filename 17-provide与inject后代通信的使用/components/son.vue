<template>
  <div>我是孙组件</div>
  <h2>{{car}}</h2>
</template>

<script>
import { inject } from "vue";

export default {
  name: "son",
  setup() {
    let car = inject("carInfo");
    return { car };
  },
};
</script>
<style  scoped>
</style>