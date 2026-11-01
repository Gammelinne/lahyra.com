<script setup lang="ts">
import ActivityCard from "@/components/Index/ActivityCard.vue";
import PersonalInfo from "@/components/Index/PersonalInfo.vue";

const { t } = useI18n();

const pageTitle = computed(() => t("Route.Home"));
watchEffect(() => {
  useHead({
    templateParams: {
      page: pageTitle.value,
    },
  });
});

const buttons = [
  {
    label: t("Home.Resume"),
    href: "/documents/cv.pdf",
    icon: "pi pi-file-pdf",
    severity: "primary",
    rounded: false,
  },
  {
    label: "",
    href: "https://github.com/Gammelinne",
    icon: "pi pi-github",
    severity: "secondary",
    rounded: true,
  },
  {
    label: "",
    href: "https://www.linkedin.com/in/kylian-renault/",
    icon: "pi pi-linkedin",
    severity: "secondary",
    rounded: true,
  },
  {
    label: "",
    href: "mailto:contact@lahyra.com",
    icon: "pi pi-envelope",
    severity: "secondary",
    rounded: true,
  },
];
</script>

<template>
  <ClientOnly>
    <div class="index-background">
      <div
        class="flex flex-col md:flex-row min-h-screen md:mt-[-4.5rem] mx-8 space-x-3"
      >
        <!-- Partie gauche -->
        <PersonalInfo :buttons="buttons" />
        <!-- Partie droite -->
        <ActivityCard />
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
@import url("/assets/css/Index/index.css");
</style>
