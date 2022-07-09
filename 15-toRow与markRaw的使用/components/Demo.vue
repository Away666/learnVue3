<template>
  <div>我是子组件</div>
  <h2>x:{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>姓名:{{person.name}}</h2>
  <h2>年龄:{{person.age}}</h2>
  <h2>薪资:{{person.job.a.salary}}k</h2>
  <h2 v-show="person.car">车:{{person.car}}</h2>
  <button @click="person.name+='!'">修改姓名</button>
  <button @click="person.age++">年龄+1</button>
  <button @click="person.job.a.salary++">薪资+1</button>
  <button @click="changeSalary">薪资+1</button>
  <br />
  <button @click="showRowData">展示原始数据</button>
  <button @click="addCar">添加一台车</button>
  <button @click="changeName">修改车名</button>
  <button @click="changePrice">修改价格</button>
</template>

<script>
import { markRaw, reactive, ref, toRaw } from "vue";
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

    // 用于读取响应式对象对应的普通对象，对这个普通对象的所有操作都不会对页面进行改变
    function showRowData() {
      const p = toRaw(person);
      p.age++;
      console.log(p);
    }

    // 标记一个对象，使其永远不会变为响应式对象
    function addCar() {
      let car = { name: "MG5", price: 9 };
      person.car = markRaw(car);
    }

    function changeName() {
      person.car.name += "!";
      console.log(person.car.name);
    }
    function changePrice() {
      person.car.price++;
      console.log(person.car.price);
    }
    function changeSalary() {
      person.job.a.salary++;
      console.log(person.job.a.salary);
    }

    return {
      person,
      sum,
      showRowData,
      addCar,
      changeName,
      changePrice,
      changeSalary,
    };
  },
};
</script>
<style  scoped>
</style>