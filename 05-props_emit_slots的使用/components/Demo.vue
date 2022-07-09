<template>
  <div>我是子组件</div>
  <button @click="emitSayHello">emit</button>
  <slot name="test1"></slot>
  <slot name="test2"></slot>
</template>

<script>
export default {
  name: "Demo",
  props: ["msg", "name"],
  emits: ["hello"],
  setup(props, context) {
    // console.log(props);
    // console.log(context.attrs);
    console.log(context.slots);
    function emitSayHello() {
      context.emit("hello", "Away");
    }
    return {
      emitSayHello,
    };
  },
};
</script>
<style  scoped>
</style>