<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer
    class="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-4 py-6 text-xs text-center opacity-70"
  >
    <span>© {{ year }} Lahyra · EI RENAULT Kylian · {{ $t("Footer.Rights") }}</span>
    <span class="hidden sm:inline">·</span>
    <NuxtLink to="/mentions-legales" class="underline">
      {{ $t("Footer.Legal") }}
    </NuxtLink>
  </footer>
</template>
