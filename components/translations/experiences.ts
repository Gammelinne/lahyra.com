import aalborgUniversityLogo from "@/assets/images/logo/logo-aalborg.png";
import qwiceLogo from "@/assets/images/logo/Qwice.jpeg";
import tdClicLogo from "@/assets/images/logo/Tdclic.jpeg";
import pavillonLogo from "@/assets/images/logo/pavillon.jpeg";
import capLogo from "@/assets/images/logo/cap.jpg";
import  agrialLogo from "@/assets/images/logo/agrial.jpg";
import lahyraLogo from "@/assets/images/logos/logo.png";
interface Experience {
  title: string;
  location: string;
  website: string;
  date: string;
  description: string;
  isComputerScience: boolean;
  position: string;
  logo?: string;
}

export const experiences: ComputedRef<Experience[]> = computed(() => {
  const { t } = useI18n();
  return [
    // Lahyra micro-entreprise 2026
    {
      title: t("Experience.Twelve.Title"),
      location: t("Experience.Twelve.Location"),
      website: t("Experience.Twelve.Website"),
      date: t("Experience.Twelve.Date"),
      description: t("Experience.Twelve.Description"),
      isComputerScience: true,
      position: "right",
      logo: lahyraLogo,
    },
    // Agrial alternance 2025
    {
      title: t("Experience.Eleven.Title"),
      location: t("Experience.Eleven.Location"),
      website: t("Experience.Eleven.Website"),
      date: t("Experience.Eleven.Date"),
      description: t("Experience.Eleven.Description"),
      isComputerScience: true,
      position: "left",
      logo: agrialLogo,
    },
    // Capgemini internship 2025
    {
      title: t("Experience.Ten.Title"),
      location: t("Experience.Ten.Location"),
      website: t("Experience.Ten.Website"),
      date: t("Experience.Ten.Date"),
      description: t("Experience.Ten.Description"),
      isComputerScience: true,
      position: "right",
      logo: capLogo,
    },
    // Aalborg University internship 2023
    {
      title: t("Experience.Eight.Title"),
      location: t("Experience.Eight.Location"),
      website: t("Experience.Eight.Website"),
      date: t("Experience.Eight.Date"),
      description: t("Experience.Eight.Description"),
      isComputerScience: true,
      position: "right",
      logo: aalborgUniversityLogo,
    },
    // Qwice internship 2022
    {
      title: t("Experience.Six.Title"),
      location: t("Experience.Six.Location"),
      website: t("Experience.Six.Website"),
      date: t("Experience.Six.Date"),
      description: t("Experience.Six.Description"),
      isComputerScience: true,
      position: "right",
      logo: qwiceLogo,
    },
    // Tdclic internship 2021
    {
      title: t("Experience.Five.Title"),
      location: t("Experience.Five.Location"),
      website: t("Experience.Five.Website"),
      date: t("Experience.Five.Date"),
      description: t("Experience.Five.Description"),
      isComputerScience: true,
      position: "left",
      logo: tdClicLogo,
    },
    // Pavillon fab manager assistant 2020
    {
      title: t("Experience.Four.Title"),
      location: t("Experience.Four.Location"),
      website: t("Experience.Four.Website"),
      date: t("Experience.Four.Date"),
      description: t("Experience.Four.Description"),
      isComputerScience: true,
      position: "right",
      logo: pavillonLogo,
    },
  ];
});
