<template>
  <h2>{{person.name}}</h2>
  <h2>{{person.age}}</h2>
  <h2>{{person.job.type}}</h2>
  <h2>{{person.job.salary}}</h2>
  <h2>{{person.hobby}}</h2>
  <button @click="changeInfo">更改信息</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    let person = reactive({
      name: "小明",
      age: 18,
      job: { type: "前端工程师", salary: "30k" },
      hobby: ["吃饭", "睡觉", "打豆豆"],
    });

    function changeInfo() {
      person.name = "Away";
      person.age = 22;
      person.job.type = "UI设计师";
      person.job.salary = "15k";
      person.hobby[0] = "学习";
    }

    return {
      person,
      changeInfo,
    };
  },
};
</script>


