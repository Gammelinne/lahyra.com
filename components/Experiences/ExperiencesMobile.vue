<script setup lang="ts">
import { experiences } from "@/components/translations/experiences";

const { t } = useI18n();
</script>

<template>
  <div class="px-4 py-8">

    <!-- TITRE -->
    <h1 class="text-3xl font-semibold text-center mb-8">
      {{ t("Experience.Title") }}
    </h1>

    <!-- CARDS -->
    <div class="flex flex-col gap-4">
      <Card
        v-for="experience in experiences"
        :key="experience.title"
        class="mx-2"
      >
        <template #title>
          <div class="flex items-start justify-between gap-2">
            <h2 class="text-base font-semibold leading-snug">{{ experience.title }}</h2>
            <span class="text-xs text-surface-400 font-normal whitespace-nowrap pt-0.5">
              <i class="pi pi-calendar mr-1" />{{ experience.date }}
            </span>
          </div>
        </template>

        <template #content>
          <!-- LOGO + META -->
          <div class="flex items-center gap-3 mb-3">
            <img
              v-if="experience.logo"
              :src="experience.logo"
              alt=""
              class="w-16 h-16 object-contain rounded-md shrink-0 bg-white p-1"
            />
            <div class="flex flex-col gap-1 text-xs text-surface-400 min-w-0">
              <span>
                <i class="pi pi-map-marker mr-1" />{{ experience.location }}
              </span>
              <a
                v-if="experience.website"
                :href="experience.website"
                target="_blank"
                class="truncate hover:text-surface-200 transition-colors"
              >
                <i class="pi pi-link mr-1" />{{ experience.website }}
              </a>
              <span>
                <Button
                  disabled
                  rounded
                  :icon="experience.isComputerScience ? 'pi pi-desktop' : 'pi pi-briefcase'"
                  :severity="experience.isComputerScience ? 'success' : 'info'"
                  size="small"
                />
              </span>
            </div>
          </div>

          <Divider class="my-2" />

          <!-- DESCRIPTION -->
          <div class="flex flex-col gap-1.5 text-sm leading-relaxed text-left">
            <p
              v-for="(line, i) in experience.description.split(' -').map(l => l.trim()).filter(Boolean)"
              :key="i"
            >
              - {{ line }}
            </p>
          </div>
        </template>
      </Card>
    </div>

  </div>
</template>