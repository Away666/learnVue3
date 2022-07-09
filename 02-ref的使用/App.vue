<template>
  <h2>{{name}}</h2>
  <h2>{{age}}</h2>
  <h2>{{job.type}}</h2>
  <h2>{{job.salary}}</h2>
  <button @click="changeInfo">更改信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    let name = ref("小明");
    let age = ref(18);
    let job = ref({
      type: "前端工程师",
      salary: "30k",
    });

    function changeInfo() {
      name.value = "Away";
      age.value = 22;
      job.value.type = "UI设计师";
      job.value.salary = "15k";
    }

    return {
      name,
      age,
      job,
      changeInfo,
    };
  },
};
</script>


