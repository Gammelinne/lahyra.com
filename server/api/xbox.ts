export default defineEventHandler(async () => {
    const config = useRuntimeConfig();
  const response = await fetch("https://api.xbl.io/v2/titles", {
    headers: {
      "X-Authorization": config.xboxAuthorization,
      "Accept": "application/json",
      "Accept-Language": "fr-FR",
    },
  });

  const data = await response.json();

  // Filtrer les jeux sans image, sans achievements réels, et les outils (RetroArch, DurangoFTP...)
  const titles = data.content.titles
    .filter((t: any) =>
      t.displayImage &&
      t.displayImage.startsWith("http://store-images") &&
      t.type === "Game" &&
      t.xboxLiveTier === "Full"
    )
    .map((t: any) => ({
      name: t.name,
      image: t.displayImage,
      lastPlayed: t.titleHistory.lastTimePlayed,
      achievements: {
        current: t.achievement.currentAchievements,
        total: t.achievement.totalGamerscore,
        current_score: t.achievement.currentGamerscore,
        percentage: t.achievement.progressPercentage,
      },
      isGamePass: t.gamePass.isGamePass,
      devices: t.devices,
    }));

  return { titles };
});