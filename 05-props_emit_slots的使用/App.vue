<template>
  <Demo msg="你好啊" name="Away" @hello="sayHello">
    <template v-slot:test1>
      <h2>test1</h2>
    </template>
    <template v-slot:test2>
      <h2>test1</h2>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: {
    Demo,
  },
  setup() {
    function sayHello(name) {
      alert(`${name}你好啊！`);
    }
    return {
      sayHello,
    };
  },
};
</script>


