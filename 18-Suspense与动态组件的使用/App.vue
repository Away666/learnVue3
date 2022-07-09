<template>
  <button @click="show = !show">显示与隐藏</button>
  <Suspense>
    <template v-slot:default>
      <Demo></Demo>
    </template>
    <template v-slot:fallback>
      <h1>加载中...</h1>
    </template>
  </Suspense>
</template>

<script>
import { defineAsyncComponent, provide, reactive, ref } from "vue";
// import Demo from "./components/Demo.vue";
const Demo = defineAsyncComponent(() => import("./components/Demo.vue"));
export default {
  name: "App",
  components: {
    Demo,
  },
  setup() {
    let show = ref(true);

    return { show,  };
  },
};
</script>


