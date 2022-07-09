import {
  onBeforeUnmount,
  onMounted,
  reactive,
} from 'vue'

export default function () {
  let point = reactive({
    x: 0,
    y: 0,
  });

  function savePoint(event) {
    point.x = event.offsetX;
    point.y = event.offsetY;
    console.log(event);
  }

  onMounted(() => {
    window.addEventListener("click", savePoint);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", savePoint);
  });
  return point
}