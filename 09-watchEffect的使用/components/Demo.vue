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
import { ref, reactive, watchEffect } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = reactive({
      name: "Away",
      age: 18,
      job: {
        a: {
          salary: 20,
        },
      },
    });

    watchEffect(() => {
      sum.value;
      person.job.a.salary;
      console.log("我被监视了");
    });

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