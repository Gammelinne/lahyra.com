<script setup lang="ts">
import { experiences } from "@/components/translations/experiences";

const { t } = useI18n();
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-10">

    <!-- TITRE -->
    <h1 class="text-4xl font-semibold text-center mb-3">
      {{ t("Experience.Title") }}
    </h1>

    <!-- TIMELINE -->
    <Timeline
      v-if="experiences.length"
      :value="experiences"
      align="alternate"
      class="my-10"
    >
      <template #marker="{ item }">
        <Button
          disabled
          rounded
          :icon="item.isComputerScience ? 'pi pi-desktop' : 'pi pi-briefcase'"
          :severity="item.isComputerScience ? 'success' : 'info'"
          size="small"
        />
      </template>

      <template #content="{ item }">
        <Card class="mx-4 mb-6 text-left" style="max-width: 400px;">

          <template #title>
            <div class="flex items-start justify-between gap-2">
              <h2 class="text-base font-semibold leading-snug">{{ item.title }}</h2>
              <span class="text-xs text-surface-400 font-normal whitespace-nowrap pt-0.5">
                <i class="pi pi-calendar mr-1" />{{ item.date }}
              </span>
            </div>
          </template>

          <template #content>
            <!-- LOGO + META -->
            <div class="flex items-center gap-3 mb-3">
              <img
                v-if="item.logo"
                :src="item.logo"
                alt=""
                class="w-16 h-16 object-contain rounded-md shrink-0 bg-white p-1"
              />
              <div class="flex flex-col gap-1 text-xs text-surface-400 min-w-0">
                <span>
                  <i class="pi pi-map-marker mr-1" />{{ item.location }}
                </span>
                <a
                  v-if="item.website"
                  :href="item.website"
                  target="_blank"
                  class="truncate hover:text-surface-200 transition-colors"
                >
                  <i class="pi pi-link mr-1" />{{ item.website }}
                </a>
              </div>
            </div>

            <Divider class="my-2" />

            <!-- DESCRIPTION -->
            <div class="flex flex-col gap-1.5 text-sm leading-relaxed text-left">
              <p
                v-for="(line, i) in item.description.split(' -').map((l: string) => l.trim()).filter(Boolean)"
                :key="i"
              >
                - {{ line }}
              </p>
            </div>
          </template>

        </Card>
      </template>
    </Timeline>

  </div>
</template>