<template>
  <div>我是子组件</div>
  <h2>{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <h2>{{msg}}</h2>
  <button @click="msg+='!'">点我</button>
  <h2>姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>
  <h2>薪水:{{person.job.a.salary}}k</h2>
  <button @click="person.name+='~'">点我</button>
  <button @click="person.age++">增加年龄</button>
  <button @click="person.job.a.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, watch } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = ref({
      name: "Away",
      age: 18,
      job: {
        a: {
          salary: 20,
        },
      },
    });

    // 监听得到： ref-person-true   ref-person.value-true-false  reactive-person-true-false
    watch(
      person,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },
      { deep: true }
    );

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>
<style  scoped>
</style>