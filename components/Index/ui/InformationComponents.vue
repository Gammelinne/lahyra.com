<script setup lang="ts">
const email = "contact@lahyra.com";
const infoColumns: Ref<{ text: string; icon: string }[][]> = ref([
  [
    { text: "Home.Infos.Name", icon: "user" },
    { text: "Home.Infos.Age", icon: "calendar" },
    { text: "Home.Infos.Birth", icon: "gift" },
  ],
  [
    { text: "Home.Infos.Location", icon: "map-marker" },
    { text: email, icon: "envelope" },
    { text: "Home.Infos.Phone", icon: "phone" },
  ],
  [
    { text: "Home.Infos.Language", icon: "globe" },
    { text: "Home.Infos.Driving", icon: "car" },
    { text: "Home.Infos.Company", icon: "building" },
  ],
]);
</script>

<template>
  <h2 class="text-2xl font-bold text-center">
    {{ $t("Home.Infos.Title") }}
  </h2>
  <div class="flex flex-col md:flex-row">
    <div
      v-for="(info, index) in infoColumns"
      :key="index"
      class="flex flex-col w-1/3 w-full"
    >
      <p
        v-for="(item, idx) in info"
        :key="idx"
        class="text-sm text-center my-1"
      >
        <i :class="`pi pi-${item.icon}`" />
        {{ item.text !== email ? $t(item.text) : item.text }}
      </p>
    </div>
  </div>
</template>
