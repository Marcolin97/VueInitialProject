<script setup>
  import { ref, computed, defineProps, onMounted, watch } from 'vue';

  const props = defineProps({
    book: Object
  });


  const collection= ref([]);

  const addBookToUser = () => {
    console.log('addBookToUser', book.value.id);
    console.log('collection', collection.value);
    collection.value = [...collection.value, book.value.id];
    /* if(!collection.value.includes(book.value.id)){
      
    } */
  }

  const removeBookFromUser = () => {
      collection.value = collection.value.filter(bookId => bookId !== book.value.id);
  }

  const book = computed(() => {
    return props.book;
  });

  const isBookInCollection = computed(() => { 
    return collection.value.includes(book.value.id);
  });

  watch( collection, (newVal, oldVal) => {
    console.log('collection changed', newVal);
    const user = { books: newVal}
    localStorage.setItem('user', JSON.stringify(user));
  });
  onMounted(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    collection.value = user ? user.books : [];
    console.log('BookCard component mounted', collection.value);

  });

</script>
<template>
  <div class="card" v-if="book">
    <div class="card-body">
      <img :src="book.url" class="card-img-top" alt="...">
      <h5 class="card-title">{{ book.title }}</h5>
      <p class="card-text">{{ book.author.firstname }}</p>
      <div class="actions">
        <router-link :to="`/book/${book.id}`" class="btn btn-primary">Details</router-link>
        <button v-if="!isBookInCollection" @click="addBookToUser" class="btn btn-success">Add</button>
        <button v-else @click="removeBookFromUser" class="btn btn-danger">Remove</button>
      </div>
    </div>
  </div>
</template>
<style scoped> 
.actions {
  display: flex;
  justify-content: space-between;
}

</style>