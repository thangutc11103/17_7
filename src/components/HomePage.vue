<template>
    <div>
        <h1>Home</h1>
        <button @click="addImage('https://bom.so/1me8ZD')">Thêm ảnh 1</button>
        <button @click="addImage('https://bom.so/BhJ8vL')">Thêm ảnh 2</button>
        <button @click="addImage('https://bom.so/u4lI96')">Thêm ảnh 3</button>
    </div>
    <div class="grid grid-cols-4">
      <div v-for="image in images" :key="image">
        <img :src="image" alt="image">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [] 
      }
    },
    methods: {
  addImage(imageUrl) {
    this.images.push(imageUrl); 
  }
},

  };
  </script>
  