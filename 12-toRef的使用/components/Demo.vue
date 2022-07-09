<template>
  <div>我是子组件</div>
  <h2>姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>
  <h2>薪资:{{person.job.a.salary}}k</h2>
  <button @click="person.name+='!'">修改姓名</button>
  <button @click="person.age++">年龄+1</button>
  <button @click="person.job.a.salary++">薪资+1</button>
  <hr />
  <h2>姓名:{{name}}</h2>
  <h2>年龄:{{age}}</h2>
  <h2>薪资:{{job.a.salary}}k</h2>
  <button @click="name+='!'">修改姓名</button>
  <button @click="age++">年龄+1</button>
  <button @click="job.a.salary++">薪资+1</button>
</template>

<script>
import { reactive, ref, toRef, toRefs } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        a: {
          salary: 20,
        },
      },
    });

    // 使用ref无法修改原对象里属性的value，但是toRef可以，创建多个时可以使用toRefs
    return {
      person,
      // name: toRef(person, "name"),
      // age: toRef(person, "age"),
      // salary: toRef(person.job.a, "salary"),
      ...toRefs(person),
    };
  },
};
</script>
<style  scoped>
</style>