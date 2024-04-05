<script setup>
import {ref, onMounted} from 'vue';
import { useRoute } from 'vue-router';

import axios from 'axios';

const book = ref(null);
const route = useRoute();

const addBookToUser = () => {
	let user = JSON.parse(localStorage.getItem('user'));
	if(!user) {
		user = {};
	}
	if(!user.books) {
		user.books = [];
	}
	if(user.books.includes(book.value.id)){
		alert('Book already added to your collection');
	} else {
		user.books.push(book.value.id);
		localStorage.setItem('user', JSON.stringify(user));
		alert('Book added to your collection');
	}
}

const removeBookFromUser = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    if(user && user.books && user.books.includes(book.value.id)){
        user.books = user.books.filter(bookId => bookId !== book.value.id);
        localStorage.setItem('user', JSON.stringify(user));
        alert('Book removed from your collection');
    } else {
        alert('Book not found in your collection');
    }
}

onMounted( async () => {
	console.log(route);
	const id = route.params.id;
	const response = await axios.get('http://localhost:3000/books/?id='+route.params.id);
	book.value = response.data[0];
	console.log(response);
});
</script>

<template>
	<div class="outer-div" v-if="book">
		<div class="grid-container">
			<img :src="book.url" alt="Book Cover" class="book-cover"/>
			<div class="book-details">
				<h2>{{ book.title }}</h2>
				<p>Author: {{ book.author.firstname }} {{ book.author.lastname }}</p>
				<p>Genre: {{ book.genres }}</p>
				<p>Published in: {{ book.year }} by {{ book.publisher }}</p>
				<button @click="addBookToUser" class="btn btn-primary">Add to Collection</button>
				<button @click="removeBookFromUser" class="btn btn-primary">Remove from Collection</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.outer-div {
	margin: 20px;
	border-radius: 10px;
	box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
	padding: 10px;
}

.grid-container {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap:10px;
}

.book-cover {
	grid-column: 1 / 2;
	width: auto;
	border-radius: 10px;
	box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
	transition: transform 0.5s;
	margin: auto;
}

.book-details {
	grid-column: 2 / 4;
	padding: 10px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.book-cover:hover {
	transform: scale(1.5);
}

.btn-primary {
	width: 200px;
}
</style>