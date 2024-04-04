<script setup>
import { onMounted, ref } from 'vue';
const books = ref([]);
onMounted(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
        const user = JSON.parse(userData);
        books.value = user.books;
    }
});


</script>

<template>
  <div>
    <h2>User's Books</h2>
    <ul>
      <li v-for="book in books" :key="book.id">
        <img :src="book.url" alt="Book Cover" style="width: 100px; height: auto;">
        <div>
          <h3>{{ book.title }}</h3>
          <p>Author: {{ book.author.firstname }} {{ book.author.lastname }}</p>
          <p>Genres: {{ book.genres.join(', ') }}</p>
          <p>Year: {{ book.year }}</p>
          <p>Publisher: {{ book.publisher }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>


<style scoped>

</style>