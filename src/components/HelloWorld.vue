<template>
  <div>
    <input v-model="text" placeholder="Nhập từ khóa" />
    <ul>
      <li v-for="item in filteredItems" :key="item.id">
        {{ item.name }}
        <button @click="removeItem(item.id)">Xóa</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const text = ref("");
    
    const filteredItems = computed(() => {
      if (text.value === "") {
        return props.items;
      } else {
        return props.items.filter((item) =>
          item.name.toLowerCase().includes(text.value.toLowerCase())
        );
      }
    });
    
    function removeItem(id) {
      emit("remove", id); 
    }
    
    return {
      text,
      filteredItems,
      removeItem,
    };
  },
};
</script>