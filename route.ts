import type { Router } from "vue-router";

export const getRoutes = (router: Router, t: (key: string) => string) => [
  {
    label: t("Route.About.Title"),
    icon: "pi pi-fw pi-user",
    items: [
      {
        label: t("Route.Experience"),
        icon: "pi pi-fw pi-briefcase",
        command: () => {
          router.push("/about/experiences");
        },
      },
      {
        label: t("Route.Education"),
        icon: "pi pi-fw pi-graduation-cap",
        command: () => {
          router.push("/about/educations");
        },
      },
    ]
  },
  {
    label: t("Route.Projects.Title"),
    icon: "pi pi-fw pi-briefcase",
    items: [
      {
        label: t("Route.Projects.Development"),
        icon: "pi pi-fw pi-code",
        command: () => {
          router.push("/projects/development");
        },
      },
      {
        label: t("Route.Projects.Server"),
        icon: "pi pi-fw pi-desktop",
        command: () => {
          router.push("/projects/server");
        },
      },

    ]
  },
  /*{
    label: t("Route.Hobbies.Title"),
    icon: "pi pi-fw pi-folder",
    items: [
      {
        label: t("Route.Hobbies.Music"),
        icon: "pi pi-fw pi-play-circle",
        command: () => {
          router.push("/hobbies/music");
        },
      },
      {
        label: t("Route.Hobbies.Games"),
        icon: "pi pi-fw pi-circle",
        command: () => {
          router.push("/hobbies/games");
        },
      }
    ],
  },*/
];
