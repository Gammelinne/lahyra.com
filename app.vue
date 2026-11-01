<script setup lang="ts">
import NavbarComponents from "@/components/NavBar/NavbarComponents.vue";
import FooterComponents from "@/components/Footer/FooterComponents.vue";
</script>

<template>
  <div id="app" class="dark">
    <NavbarComponents />
    <NuxtPage class="min-h-screen" />
    <FooterComponents />
  </div>
</template>

<style>
:root {
  font-family: "Roboto", sans-serif;
}
</style>
