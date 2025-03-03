App.modules["intro"] = (() => {
  return {
    async handleIntro() {
      const lien = document.querySelector('[href*="/intro"]');
      if(!lien) return;
      const url = lien.href;
      if (!localStorage.getItem("intro")) {
        localStorage.setItem("intro", true);
        window.location.href = url;
      }
    },
    start() {
      this.handleIntro();
      const video = document.querySelector(".video video");
      if (!video) return;

      // Définir le volume initial à 0
      video.volume = 0;

      video.addEventListener("mouseenter", () => {
        console.log("mouseenter");
        // video.volume = 0.5; // Volume à 50% (0.5)
      });

      video.addEventListener("mouseleave", () => {
        console.log("mouseleave");
        // video.volume = 0; // Revenir à 0 quand la souris quitte
      });
    },
  };
})();
