import judoclubouistreham from "@/assets/images/Judoclubouistreham/judoclubouistreham.png";
import judoclubouistreham2 from "@/assets/images/Judoclubouistreham/judoclubouistreham2.png";

export interface Route {
  methode: string;
  endpoint: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  website: string;
  route?: Record<number, Route>;
  embedded?: string;
  images?: any[];
}

export const projects: ComputedRef<Project[]> = computed(() => {
  const { t } = useI18n();
  return [
    {
      id: 0,
      title: t("Project.One.Title"),
      description: t("Project.One.Description"),
      technologies: t("Project.One.Technologies"),
      website: t("Project.One.Website"),
      images: [judoclubouistreham, judoclubouistreham2],
    },
    {
      id: 1,
      title: t("Project.Two.Title"),
      description: t("Project.Two.Description"),
      technologies: t("Project.Two.Technologies"),
      website: t("Project.Two.Website"),
    },
  ];
});
