<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();

const specs = computed(() => [
  { key: t("Server.CPU"),     value: t("Server.CPUValue") },
  { key: t("Server.RAM"),     value: t("Server.RAMValue") },
  { key: t("Server.Storage"), value: t("Server.StorageValue") },
  { key: t("Server.OS"),      value: t("Server.OSValue") },
]);

const services = computed(() => [
  { name: t("Server.Dash"),       desc: t("Server.DashDesc") },
  { name: t("Server.MariaDB"),    desc: t("Server.MariaDBDesc") },
  { name: t("Server.Portfolio"),  desc: t("Server.PortfolioDesc") },
  { name: t("Server.Watchtower"), desc: t("Server.WatchtowerDesc") },
  { name: t("Server.GitLab"),     desc: t("Server.GitLabDesc") },
  { name: t("Server.PrimeVue"),   desc: t("Server.PrimeVueDesc") },
  { name: t("Server.JudoClub"),   desc: t("Server.JudoClubDesc") },
]);
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4 my-4 mx-4 md:h-[450px]">

    <!-- Card info serveur -->
    <Card class="w-full md:w-80 flex flex-col shrink-0">
      <template #header>
        <div class="px-5 pt-5">
          <h2 class="text-lg font-semibold">{{ t("Server.Title") }}</h2>
          <p class="text-sm text-surface-400 mt-1">{{ t("Server.OverviewText") }}</p>
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-5 px-1">

          <!-- Specs -->
          <div>
            <p class="text-[11px] font-medium uppercase tracking-widest text-surface-400 mb-2">
              {{ t("Server.Specifications") }}
            </p>
            <div class="grid grid-cols-2 gap-2">
              <div
                v-for="spec in specs"
                :key="spec.key"
                class="bg-surface-800 rounded-lg px-3 py-2"
              >
                <p class="text-[11px] text-surface-400">{{ spec.key }}</p>
                <p class="text-sm font-mono font-medium mt-0.5">{{ spec.value }}</p>
              </div>
            </div>
          </div>

          <Divider class="m-0" />

          <!-- Services -->
          <div>
            <p class="text-[11px] font-medium uppercase tracking-widest text-surface-400 mb-2">
              {{ t("Server.Docker") }}
            </p>
            <div class="flex flex-wrap gap-1.5">
              <Tag
                v-for="svc in services"
                :key="svc.name"
                :value="svc.name"
                v-tooltip.top="svc.desc"
                severity="secondary"
                class="cursor-default"
              />
            </div>
          </div>

        </div>
      </template>

      <template #footer>
        <p class="text-xs text-surface-400">{{ t("Server.Note") }}</p>
      </template>
    </Card>

    <!-- Embed supervision -->
    <div class="flex flex-col flex-1 min-h-[400px] md:min-h-0 rounded-xl border border-surface-700 overflow-hidden">
      <div class="flex items-center gap-2 px-3 py-2 bg-surface-800 border-b border-surface-700 shrink-0">
        <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span class="text-xs text-surface-400 font-mono">supervision.lahyra.com</span>
      </div>
      <embed
        src="https://supervision.lahyra.com/"
        class="w-full flex-1"
      />
    </div>

  </div>
</template>