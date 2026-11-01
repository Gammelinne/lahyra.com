<script setup lang="ts">
const { t } = useI18n();
const pageTitle = computed(() => t("Route.Legal"));
watchEffect(() => {
  useHead({ templateParams: { page: pageTitle.value } });
});

const address = "5-1 rue Galante, 14780 Lion-sur-Mer, France";
const email = "contact@lahyra.com";
const phone = "+33 6 67 59 06 50";

const publisher = computed(() => [
  { label: t("Legal.Publisher.TradeName"), value: "Lahyra" },
  { label: t("Legal.Publisher.CompanyName"), value: "EI RENAULT Kylian" },
  { label: t("Legal.Publisher.LegalForm"), value: t("Legal.Publisher.LegalFormValue") },
  { label: t("Legal.Publisher.Address"), value: address },
  { label: t("Legal.Publisher.Siret"), value: t("Legal.Publisher.SiretValue") },
  { label: t("Legal.Publisher.Email"), value: email, href: `mailto:${email}` },
  { label: t("Legal.Publisher.Phone"), value: phone, href: "tel:+33667590650" },
]);

const sections = ["Director", "Hosting", "Property", "Privacy"];
</script>

<template>
  <div class="max-w-3xl mx-auto px-6 py-10">

    <!-- TITRE -->
    <h1 class="text-4xl font-semibold text-center mb-2">
      {{ t("Legal.Title") }}
    </h1>
    <p class="text-sm text-center opacity-70 mb-10">
      {{ t("Legal.Updated") }}
    </p>

    <Card>
      <template #content>
        <!-- ÉDITEUR -->
        <section>
          <h2 class="text-xl font-semibold mb-2">{{ t("Legal.Publisher.Title") }}</h2>
          <p class="mb-4 leading-relaxed">{{ t("Legal.Publisher.Text") }}</p>
          <dl class="grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-x-4 gap-y-2 text-sm">
            <template v-for="item in publisher" :key="item.label">
              <dt class="font-semibold">{{ item.label }}</dt>
              <dd>
                <a v-if="item.href" :href="item.href" class="underline">{{ item.value }}</a>
                <template v-else>{{ item.value }}</template>
              </dd>
            </template>
          </dl>
        </section>

        <!-- AUTRES SECTIONS -->
        <section v-for="section in sections" :key="section">
          <Divider class="my-6" />
          <h2 class="text-xl font-semibold mb-2">{{ t(`Legal.${section}.Title`) }}</h2>
          <p class="leading-relaxed">{{ t(`Legal.${section}.Text`, { address, phone }) }}</p>
        </section>
      </template>
    </Card>

  </div>
</template>
