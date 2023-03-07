<script setup>
import { ref, onMounted } from "vue";

import DataService from "../services/DataService";

const tutorials = ref([]);

onMounted(() => {
  retrieveTutorials();
});

const retrieveTutorials = () => {
  DataService.getAll().on("value", items => {
    tutorials.value = [];
    items.forEach(item => {
      const data = item.val();
      const key = item.key;
      tutorials.value.push({ key, ...data });
    });
  });
};

// Create tutorial function
const createTutorial = () => {
  const data = {
    title: "Vue.js",
    description: "Vue.js is a progressive framework for building user interfaces."
  };

  DataService.create(data)
    .then(response => {
      console.log(response);
      tutorials.value.push(response.data);
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
};
</script>

<template>
  <div class="hello">
    <!-- Create tutorial button -->
    <button @click="createTutorial">Create Tutorial</button>
    
    <h1>Tutorials List</h1>
    <ul>
      <li v-for="tutorial in tutorials" :key="tutorial.id">
        {{ tutorial.title }}
      </li>
    </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
