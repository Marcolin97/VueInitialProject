<script setup>
import { onMounted, ref } from 'vue';

import axios from 'axios';

import BookCard from '../components/BookCard.vue';

const books = ref([]);

onMounted(async () => {
	const userBooks = JSON.parse(localStorage.getItem('user'));
	const { data: response } = await axios.get('http://localhost:3000/books');
	books.value = response.filter(book => userBooks.books.includes(book.id));
});
</script>
<template>
	<div>
		<div class="grid-container">
		<BookCard
			v-for="book in books"
			:book="book"
			class="grid-item"
		/>
		</div>
	</div>
</template>
<style scoped>
#msg {
  color: #ff0000;
  text-align: center;
  margin-top: 20px;
}

.author {
  margin-top: 20px;
  text-align: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 0 auto; 
  width: 80%; 
  margin-top: 20px;
}

.grid-item {
  grid-column: span 1;
  width: 100%;
  transition: background-color 0.3s ease;
}

.grid-item:hover {
  background-color: #ff0000;
}
</style>