<script setup lang="ts">
import { educations } from "~/components/translations/educations";

const { t } = useI18n();
const pageTitle = computed(() => t("Route.Education"));
watchEffect(() => {
  useHead({ templateParams: { page: pageTitle.value } });
});
</script>

<template>
  <ClientOnly>
    <div class="max-w-4xl mx-auto px-6 py-10">

      <!-- TITRE -->
      <h1 class="text-4xl font-semibold text-center mb-12">
        {{ t("Education.Title") }}
      </h1>

      <!-- CHRONOLOGIE -->
      <div class="relative">

        <div class="flex flex-col">
          <div
            v-for="(education, index) in educations"
            :key="education.id"
            class="relative flex gap-4 pb-12"
          >
            <!-- DATE À GAUCHE -->
            <div class="w-32 shrink-0 text-right pt-2">
              <span class="text-sm font-semibold text-primary">
                {{ education.date }}
              </span>
            </div>

            <!-- LIGNE + POINT + FLÈCHE -->
            <div class="flex flex-col items-center shrink-0">
              <!-- Cercle -->
              <div class="w-5 h-5 rounded-full bg-primary mt-1.5 z-10 shrink-0 shadow-md ring-4 ring-surface-800" />
              <!-- Ligne + flèche -->
              <template v-if="index < educations.length - 1">
                <div class="w-px flex-1 mt-1" style="background: linear-gradient(to bottom, var(--p-primary-color), transparent);" />
                <i class="pi pi-chevron-down text-primary text-xs mb-1" />
              </template>
            </div>

            <!-- CARD -->
            <Card class="flex-1">
              <template #title>
                <div class="flex items-center gap-3">
                  <img
                    v-if="education.logo"
                    :src="education.logo"
                    alt=""
                    class="w-10 h-10 object-contain rounded-md shrink-0 bg-white p-1"
                  />
                  <h2 class="text-base font-semibold leading-snug">{{ education.title }}</h2>
                </div>
              </template>

              <template #content>
                <!-- LIEU -->
                <p class="text-xs text-surface-400 mb-3">
                  <i class="pi pi-map-marker mr-1" />{{ education.location }}
                </p>

                <Divider class="my-2" />

                <!-- TAGS -->
                <div class="flex flex-wrap gap-1.5">
                  <Tag
                    v-for="desc in education.description.split(',').map(d => d.trim()).filter(Boolean)"
                    :key="desc"
                    :value="desc"
                    severity="secondary"
                    class="text-xs"
                  />
                </div>
              </template>

              <template #footer>
                <Button
                  severity="success"
                  size="small"
                  as="a"
                  :label="t('Education.More')"
                  :href="education.website"
                  target="_blank"
                  icon="pi pi-link"
                />
              </template>
            </Card>

          </div>
        </div>
      </div>

    </div>
  </ClientOnly>
</template>