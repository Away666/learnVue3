<template>
  <div>我是子组件</div>
  <h2>{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <h2>x:{{point.x}} y:{{point.y}}</h2>
</template>

<script>
import { ref } from "vue";
import usePoint from "../hooks/usePoint";
export default {
  name: "Demo",
  setup(props, context) {
    let sum = ref(0);
    let point = usePoint();

    return { sum, point };
  },
};
</script>
<style  scoped>
</style>