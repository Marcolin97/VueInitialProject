<script setup>
import logo from '../assets/img/logo.png'
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style="width: 100%;">
    <div class="container-fluid">
        <a class="navbar-brand mx-xl-5">
            <img :src="logo" alt="" width="50" height="50">
        </a>
        <div class="ml-auto">
            <router-link to="/user" class="btn btn-primary">User Page</router-link>
        </div>
    </div>
    </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
}
</style>