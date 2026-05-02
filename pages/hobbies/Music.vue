<script lang="ts" setup>
const { t } = useI18n();
const artistsSource = <Array<string>>["12Chz98pHFMPJEknJQMWvI", "167abweXl3demO9x0VMMeJ", "4EePV5BljRSXJnYww4d5Qa", "45yEuthJ9yq1rNXAOpBnqM", "6FugQjLquBF4JzATRN70bR", "53XhwfbYqKCa1cC15pYq2q"];
const playlistSource = <Array<string>>["37i9dQZF1EpuPVBS0gtxw7", "37i9dQZF1FafWuCdiJRI2x"];
const pageTitle = computed(() => t("Route.Hobbies.Music"));

import drum from "@/assets/images/Instruments/drum.jpg";

watchEffect(() => {
  useHead({ templateParams: { page: pageTitle.value } });
});

const mode = useColorMode();
const toast = useToast();
const selectedArtists = ref<Array<string>>([]);

const spotifyTheme = computed(() => mode.preference === "dark" ? "0" : "1");

const submit = () => {
  const requiredArtists = ["167abweXl3demO9x0VMMeJ", "4EePV5BljRSXJnYww4d5Qa", "45yEuthJ9yq1rNXAOpBnqM"];
  const correct =
    selectedArtists.value.length === 3 &&
    requiredArtists.every(a => selectedArtists.value.includes(a)) &&
    selectedArtists.value.sort().join() === requiredArtists.sort().join();
  toast.add(correct
    ? { severity: "success", summary: t("Hobbies.Music.Success"), detail: t("Hobbies.Music.SuccessMessage"), life: 3000 }
    : { severity: "error", summary: t("Hobbies.Music.Error"), detail: t("Hobbies.Music.ErrorMessage"), life: 3000 }
  );
};
</script>

<template>
  <ClientOnly>
    <div class="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-16">

      <!-- TITRE -->
      <div class="text-center">
        <h1 class="text-4xl font-semibold mb-2">{{ $t("Hobbies.Music.Title") }}</h1>
        <p class="text-surface-400 text-sm">{{ $t("Hobbies.Music.Subtitle") }}</p>
      </div>

      <!-- SECTION INSTRUMENTS -->
      <section class="flex flex-col gap-4">
        <div class="flex items-center gap-3 mb-2">
          <i class="pi pi-volume-up text-primary text-xl" />
          <h2 class="text-2xl font-semibold">{{ $t("Hobbies.Music.Instruments") }}</h2>
        </div>

        <Card>
          <template #content>
            <div class="flex flex-col md:flex-row items-center gap-8">
              <Image
                :src="drum"
                alt="Drum"
                width="280"
                class="rounded-xl shrink-0"
              />
              <div class="flex flex-col gap-3">
                <div class="flex items-center gap-2">
                  <Tag :value="$t('Hobbies.Music.Drum')" severity="secondary" class="text-sm" />
                </div>
                <p class="text-surface-400 leading-relaxed text-sm">
                  {{ $t("Hobbies.Music.DrumDescription") }}
                </p>
              </div>
            </div>
          </template>
        </Card>
      </section>

      <!-- SECTION ARTISTES -->
      <section class="flex flex-col gap-4">
        <div class="flex items-center gap-3 mb-2">
          <i class="pi pi-star text-primary text-xl" />
          <h2 class="text-2xl font-semibold">{{ $t("Hobbies.Music.Artist") }}</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <iframe
            v-for="artist in artistsSource"
            :key="artist"
            :src="`https://open.spotify.com/embed/artist/${artist}?utm_source=generator&theme=${spotifyTheme}`"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            class="rounded-xl"
          />
        </div>

        <!-- MINI-JEU -->
        <Card class="mt-2">
          <template #title>
            <div class="flex items-center gap-2">
              <i class="pi pi-question-circle text-primary" />
              <span class="text-base font-semibold">{{ $t("Hobbies.Music.Question") }}</span>
            </div>
          </template>
          <template #content>
            <p class="text-xs text-surface-400 mb-4">{{ $t("Hobbies.Music.QuestionHint") }}</p>
            <div class="flex flex-wrap gap-4 mb-5">
              <div
                v-for="(artist, index) in artistsSource"
                :key="artist"
                class="flex items-center gap-2"
              >
                <Checkbox
                  v-model="selectedArtists"
                  :value="artist"
                  :inputId="`artist-${index}`"
                />
                <label :for="`artist-${index}`" class="text-sm cursor-pointer select-none">
                  {{ index + 1 }}
                </label>
              </div>
            </div>
            <Button size="small" icon="pi pi-check" :label="$t('Hobbies.Music.Submit')" @click="submit" />
          </template>
        </Card>
      </section>

      <!-- SECTION PLAYLISTS -->
      <section class="flex flex-col gap-4">
        <div class="flex items-center gap-3 mb-2">
          <i class="pi pi-list text-primary text-xl" />
          <h2 class="text-2xl font-semibold">{{ $t("Hobbies.Music.Playlist") }}</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <iframe
            v-for="playlist in playlistSource"
            :key="playlist"
            :src="`https://open.spotify.com/embed/playlist/${playlist}?utm_source=generator&theme=${spotifyTheme}`"
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            class="rounded-xl"
          />
        </div>
      </section>

    </div>

    <Toast />
  </ClientOnly>
</template>