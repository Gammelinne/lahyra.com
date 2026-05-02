<script setup lang="ts">
type XboxGame = {
  name: string;
  image: string;
  isGamePass: boolean;
  lastPlayed: string;
  achievements: {
    current_score: number;
    percentage: number;
  };
};

type XboxResponse = {
  titles: XboxGame[];
};

const { t } = useI18n();
const pageTitle = computed(() => t("Route.Hobbies.Game"));
watchEffect(() => {
  useHead({ templateParams: { page: pageTitle.value } });
});

const { data, pending } = await useFetch<XboxResponse>("/api/xbox");

const recentGames = computed(() =>
  (data.value?.titles ?? []).slice(0, 12)
);

const topGames = computed(() =>
  [...(data.value?.titles ?? [])]
    .filter(g => g.achievements.current_score > 0)
    .sort((a, b) => b.achievements.current_score - a.achievements.current_score)
    .slice(0, 6)
);

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric", month: "short", year: "numeric",
  });
}
</script>

<template>
  <ClientOnly>
    <div class="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-12">

      <!-- TITRE -->
      <h1 class="text-4xl font-semibold text-center">
        {{ t("Hobbies.Game.Title") }}
      </h1>

      <!-- SKELETON -->
      <template v-if="pending">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Skeleton v-for="i in 8" :key="i" height="180px" class="rounded-xl" />
        </div>
      </template>

      <template v-else>

        <!-- JEUX RÉCENTS -->
        <section class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <i class="pi pi-clock text-primary" />
            <h2 class="text-xl font-semibold">{{ t("Hobbies.Game.Recent") }}</h2>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="game in recentGames"
              :key="game.name"
              class="flex flex-col gap-2 group"
            >
              <div class="relative overflow-hidden rounded-xl aspect-video">
                <img
                  :src="game.image"
                  :alt="game.name"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  v-if="game.isGamePass"
                  class="absolute top-2 left-2 bg-black/70 rounded px-1.5 py-0.5"
                >
                  <span class="text-[10px] text-green-400 font-semibold">Game Pass</span>
                </div>
              </div>
              <div class="px-0.5">
                <p class="text-xs font-medium leading-snug line-clamp-1">{{ game.name }}</p>
                <p class="text-[11px] text-surface-400 mt-0.5">
                  <i class="pi pi-calendar mr-1" />{{ formatDate(game.lastPlayed) }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        <!-- TOP ACHIEVEMENTS -->
        <section class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <i class="pi pi-star text-primary" />
            <h2 class="text-xl font-semibold">{{ t("Hobbies.Game.TopAchievements") }}</h2>
          </div>

          <div class="flex flex-col gap-3">
            <div
              v-for="game in topGames"
              :key="game.name"
              class="flex items-center gap-4"
            >
              <img
                :src="game.image"
                :alt="game.name"
                class="w-12 h-12 object-cover rounded-lg shrink-0"
              />
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-2 mb-1">
                  <p class="text-sm font-medium truncate">{{ game.name }}</p>
                  <span class="text-xs text-surface-400 shrink-0">
                    {{ game.achievements.current_score }}G
                  </span>
                </div>
                <ProgressBar
                  :value="game.achievements.percentage"
                  :show-value="false"
                  class="h-1.5"
                />
              </div>
            </div>
          </div>
        </section>

      </template>
    </div>
  </ClientOnly>
</template>