<template>
  <div>我是子组件</div>
  <h2>x:{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>
  <h2>薪资:{{person.job.a.salary}}k</h2>
  <button @click="person.name+='!'">修改姓名</button>
  <button @click="person.age++">年龄+1</button>
  <button @click="person.job.a.salary++">薪资+1</button>
</template>

<script>
import { reactive, readonly, ref, shallowReadonly } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    let sum = ref(0);
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        a: {
          salary: 20,
        },
      },
    });
    // sum = readonly(sum); // 无法修改
    // sum = shallowReadonly(sum); // 无法修改
    // person = readonly(person); // 让一个响应式数据变为只读（深只读）
    // person = shallowReadonly(person); // 让一个响应式数据变为只读（浅只读） 可以修改salary属性

    return {
      person,
      sum,
    };
  },
};
</script>
<style  scoped>
</style>