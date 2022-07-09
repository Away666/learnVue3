<template>
  <div>我是子组件</div>
  <input type="text" v-model="keyword" />
  <h2>{{keyword}}</h2>
</template>

<script>
import { get } from "http";
import { customRef, ref } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    // let keyword = ref("");

    function myRef(value, delay) {
      let timer = null;
      return customRef((track, trigger) => {
        return {
          get() {
            track(); // 通知vue追踪value的变化
            return value;
          },
          set(newValue) {
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger(); // 通知vue去重新解析模板
            }, delay);
          },
        };
      });
    }
    let keyword = myRef("value", 500);
    return {
      keyword,
    };
  },
};
</script>
<style  scoped>
</style>