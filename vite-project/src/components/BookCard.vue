<script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    book: Object
  });
</script>

<template>
<div class="card">
    <div class="card-body">
    <img :src="book.url" class="card-img-top" alt="...">
    <h5 class="card-title">{{ book.title }}</h5>
    <p class="card-text">{{ book.author.firstname }}</p>
    <router-link :to="`/book/${book.id}`" class="btn btn-primary">Details</router-link>
    </div>
</div>
</template>

