<template>
  <div>
  </div>
</template>

<script>
import { useTextStore } from "../state/textStore.js";
export default {
  name: "Section",
  setup() {
    const textStore = useTextStore();

    return { textStore }
  }
}
</script>

<style scoped>

</style>