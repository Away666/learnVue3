<template>
  <button @click="show = !show">显示与隐藏</button>
  <h2>{{car}}</h2>
  <button @click="changeCarInfo">修改车的信息</button>
  <Demo v-if="show"></Demo>
</template>

<script>
import { provide, reactive, ref } from "vue";
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: {
    Demo,
  },
  setup() {
    let show = ref(true);
    let car = reactive({
      name: "MG5",
      price: "7.2W",
    });
    provide("carInfo", car);
    function changeCarInfo() {
      car.name = "宝马";
    }
    return { show, car, changeCarInfo };
  },
};
</script>


