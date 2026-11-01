import logoCesi from "@/assets/images/logo/logocesi.jpg";

interface Education {
  id: number;
  title: string;
  location: string;
  website: string;
  date: string;
  description: string;
  logo?: string;
}

export const educations: ComputedRef<Education[]> = computed(() => {
  const { t } = useI18n();
  return [
    {
      id: 1,
      title: t("Education.Five.Title"),
      location: t("Education.Five.Location"),
      website: t("Education.Five.Website"),
      date: t("Education.Five.Date"),
      description: t("Education.Five.Description"),
      logo: logoCesi,
    },
    {
      id: 2,
      title: t("Education.Four.Title"),
      location: t("Education.Four.Location"),
      website: t("Education.Four.Website"),
      date: t("Education.Four.Date"),
      description: t("Education.Four.Description"),
      logo: logoCesi,
    },
    {
      id: 3,
      title: t("Education.Three.Title"),
      location: t("Education.Three.Location"),
      website: t("Education.Three.Website"),
      date: t("Education.Three.Date"),
      description: t("Education.Three.Description"),
      logo: logoCesi,
    },
  ];
});
