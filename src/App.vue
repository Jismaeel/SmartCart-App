<script setup>
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue"
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>
