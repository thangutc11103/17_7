<template>
  <div id="app">
    <HelloWorld :items="listColor" @remove="handleRemove" />
  </div>
</template>

<script>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import data from "@/data/MOCK_DATA.js";

export default {
  components: {
    HelloWorld,
  },
  setup() {
    const listColor = ref(data); 
    
    function handleRemove(id) {
      const index = listColor.value.findIndex((item) => item.id === id);
      if (index !== -1) {
        listColor.value.splice(index, 1);
      }
    }
    
    return {
      handleRemove,
      listColor,
    };
  },
};
</script>

<style>
#app {
  text-align: center;
  padding: 20px;
}
</style>