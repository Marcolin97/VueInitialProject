<script setup>
import { createRouter, createWebHistory } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<style scoped>

</style>