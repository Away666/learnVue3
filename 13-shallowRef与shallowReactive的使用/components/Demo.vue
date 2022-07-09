<template>
  <div>我是子组件</div>
  <h2>x:{{x.y}}</h2>
  <button @click="x.y++">点我+1</button>
  <button @click="x={y:800}">点我替换x.y</button>
  <hr />
  <h2>姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>
  <h2>薪资:{{person.job.a.salary}}k</h2>
  <button @click="person.name+='!'">修改姓名</button>
  <button @click="person.age++">年龄+1</button>
  <button @click="person.job.a.salary++">薪资+1</button>
</template>

<script>
import { reactive, ref, shallowReactive, shallowRef } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    // shallowReactive只处理对象最外层属性的响应式（浅响应式）
    // shallowRef只处理基本数据类型的响应式，不进行对象的响应式处理

    let person = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        a: {
          salary: 20,
        },
      },
    });
    let x = shallowRef({
      y: 0,
    });

    return {
      person,
      x,
    };
  },
};
</script>
<style  scoped>
</style>