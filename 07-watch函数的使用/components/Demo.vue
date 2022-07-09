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
    let person = reactive({
      name: "Away",
      age: 18,
      job: {
        a: {
          salary: 20,
        },
      },
    });

    // 监视一个ref  ok
    // watch(sum, (newValue, oldValue) => {
    //   console.log(newValue, oldValue);  //
    // });

    // 监视多个ref  ok
    // watch(
    //   [sum, msg],
    //   (newValue, oldValue) => {
    //     console.log(newValue, oldValue);
    //   },
    //   { immediate: true }
    // );

    // 监视reactive的整个对象  1.无法获取正确的oldValue 2.强制开启了深度监听
    // watch(
    //   person,
    //   (newValue, oldValue) => {
    //     console.log(newValue, oldValue);
    //   },
    //   { deep: false } // 此处的deep:false 无效
    // );

    // 监听reactive的对象的某个属性  ok
    // watch(
    //   () => person.age,
    //   (newValue, oldValue) => {
    //     console.log(newValue, oldValue);
    //   }
    // );

    // 监听reactive的对象的某些属性  ok
    // watch([() => person.name, () => person.age], (newValue, oldValue) => {
    //   console.log(newValue, oldValue);
    // });

    // 特殊情况  此处由于监听的是reactive定义的对象中的某个属性，所以deep有效  ok但无法获取正确的oldValue
    // watch(
    //   () => person.job,
    //   (newValue, oldValue) => {
    //     console.log(newValue, oldValue);
    //   },
    //   { deep: true }
    // );

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