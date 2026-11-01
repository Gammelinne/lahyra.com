<script setup lang="ts">
import { projects } from "@/components/translations/developments";
import type { Project } from "@/components/translations/developments";

const selectedProject = ref<Project | null>(null);
const showDesc = ref(false);
const showRoutes = ref(false);

function openDesc(p: Project) {
  selectedProject.value = p;
  showDesc.value = true;
}

function openRoutes(p: Project) {
  selectedProject.value = p;
  showRoutes.value = true;
}

const descLines = computed(() =>
  selectedProject.value?.description
    .split(" - ")
    .map((l) => l.trim())
    .filter(Boolean) ?? []
);
</script>

<template>
  <ClientOnly>

    <h1 class="text-3xl font-semibold text-center mt-10 mb-8">
      {{ $t("Project.Title") }}
    </h1>

    <div class="px-4 pb-12" style="max-width: 1080px; margin: 0 auto;">
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        <Card
          v-for="project in projects"
          :key="project.id"
          class="flex flex-col overflow-hidden"
        >
          <!-- IMAGE -->
          <template #header>
            <div class="overflow-hidden" style="height: 160px;">
              <Carousel
                v-if="project.images?.length"
                :value="project.images"
                :num-visible="1"
                :num-scroll="1"
                :circular="true"
                :show-indicators="project.images.length > 1"
                :show-navigators="false"
                :autoplay-interval="3000"
              >
                <template #item="{ data }">
                  <img
                    :src="data"
                    alt=""
                    class="w-full object-cover"
                    style="height: 160px;"
                  />
                </template>
              </Carousel>
              <div
                v-else
                class="w-full h-full bg-surface-800 flex items-center justify-center"
              >
                <i class="pi pi-image text-3xl text-surface-500" />
              </div>
            </div>
          </template>

          <template #title>
            <span class="text-base font-semibold">{{ project.title }}</span>
          </template>

          <template #subtitle>
            <p class="text-sm text-surface-400 line-clamp-2 mt-1">
              {{ project.description.split(" - ")[0].trim() }}
            </p>
          </template>

          <template #content>
            <div class="flex flex-wrap gap-1">
              <Tag
                v-for="tech in project.technologies.split(',')"
                :key="tech"
                :value="tech.trim()"
                severity="secondary"
                class="text-xs"
              />
            </div>
          </template>

          <template #footer>
            <div class="flex items-center justify-between">
              <div class="flex gap-2">
                <Button
                  icon="pi pi-link"
                  as="a"
                  :href="project.website"
                  target="_blank"
                  size="small"
                  severity="secondary"
                  v-tooltip.top="$t('Project.Website')"
                />
                <Button
                  v-if="project.route"
                  icon="pi pi-sitemap"
                  size="small"
                  severity="secondary"
                  v-tooltip.top="$t('Project.Routes')"
                  @click="openRoutes(project)"
                />
              </div>
              <Button
                :label="$t('Project.SeeMore')"
                variant="text"
                size="small"
                icon="pi pi-arrow-right"
                icon-pos="right"
                @click="openDesc(project)"
              />
            </div>
          </template>
        </Card>

      </div>
    </div>

    <!-- MODALE DESCRIPTION -->
    <Dialog
      v-model:visible="showDesc"
      :header="selectedProject?.title"
      modal
      maximizable
      close-on-escape
      :style="{ width: '48rem' }"
    >
      <div class="flex flex-col gap-3 text-sm leading-relaxed">
        <p
          v-for="(line, i) in descLines"
          :key="i"
          class="text-surface-300"
        >
          {{ line }}
        </p>
      </div>
      <template #footer>
        <Button
          v-if="selectedProject?.website"
          icon="pi pi-external-link"
          :label="$t('Project.Website')"
          as="a"
          :href="selectedProject.website"
          target="_blank"
          size="small"
        />
      </template>
    </Dialog>

    <!-- MODALE ROUTES -->
    <Dialog
      v-model:visible="showRoutes"
      :header="`${selectedProject?.title} — API Routes`"
      modal
      :style="{ width: '64rem' }"
    >
      <DataTable
        v-if="selectedProject?.route"
        :value="Object.values(selectedProject.route)"
        size="small"
        striped-rows
        scroll-height="420px"
        scrollable
      >
        <Column field="methode" header="Méthode" style="width: 100px;">
          <template #body="{ data }">
            <Tag
              :value="data.methode"
              :severity="
                data.methode === 'GET'    ? 'success'
                : data.methode === 'POST' ? 'info'
                : data.methode === 'PUT'  ? 'warn'
                : 'danger'
              "
              class="text-xs font-mono"
            />
          </template>
        </Column>
        <Column field="endpoint" header="Endpoint">
          <template #body="{ data }">
            <code class="text-xs">{{ data.endpoint }}</code>
          </template>
        </Column>
        <Column field="description" header="Description" />
      </DataTable>
    </Dialog>

  </ClientOnly>
</template>