<template>
  <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <h2>{{sex}}</h2>
  <h2>{{a}}</h2>
  <button @click="say">说话</button>
  <br />
  <button @click="test1">用vue2的方法使用setup</button>
  <br />
  <button @click="test2">用vue3的方法使用vue2</button>
</template>

<script>
import { h } from "vue";
export default {
  name: "App",
  data() {
    return {
      sex: "男",
      a: 100,
    };
  },
  methods: {
    test1() {
      console.log(this.name);
      this.say();
    },
  },
  // 不建议混合使用
  // 如果与data里的属性重名时，会使用setup里的
  setup() {
    let name = "小明";
    let age = 18;
    let a = 200;

    function say() {
      alert(`我叫${name},今年${age}岁了`);
    }

    function test2() {
      console.log(this.sex); // 读取不到data里的sex
      alert("我是Away");
    }

    // 返回一个对象  常用
    return {
      name,
      age,
      say,
      test2,
      a,
    };

    // 渲染函数
    // return () => h("h1", "Away");
  },
};
</script>


