<template>
  <button @click="show = !show">显示与隐藏</button>
  <Demo v-if="show"></Demo>
</template>

<script>
import { ref } from "vue";
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: {
    Demo,
  },
  setup() {
    let show = ref(true);
    return { show };
  },
};
</script>


