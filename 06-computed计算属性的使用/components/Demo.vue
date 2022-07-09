<template>
  <div>我是子组件</div>
  <input type="text" v-model="person.firstName" />
  <input type="text" v-model="person.lastName" />
  <h3>{{person.fullName}}</h3>
  <input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });

    // 计算属性 --简写  （没有考虑计算属性被修改的情况）
    // person.fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    // });

    // 计算属性 --完整
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        let arr = value.split("-");
        person.firstName = arr[0];
        person.lastName = arr[1];
      },
    });

    return {
      person,
    };
  },
};
</script>
<style  scoped>
</style>