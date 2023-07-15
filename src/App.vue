<template>
  <div id="app">
    <router-link to="/eg1" class="text-5xl">HomePage1</router-link>
    <router-link to="/eg2" class="text-5xl">HomePage2</router-link>
    <router-link to="/eg3" class="text-5xl">HomePage3</router-link>
    <br>
    <router-view></router-view>
  </div>
</template>
<script>
 

export default {
  
  components: {

},
  data() {
    return {
       
    }
  },
  methods: {
   
  }
};
</script>

