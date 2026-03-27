document.addEventListener("DOMContentLoaded", () => {

  const track = document.getElementById("galleryTrack");
  const prevBtn = document.getElementById("galleryPrev");
  const nextBtn = document.getElementById("galleryNext");
  if (track && prevBtn && nextBtn) {
    const scrollAmount = 280;
    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      resetAutoScroll();
    });
    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: scrollAmount, behavior: "smooth" });
      resetAutoScroll();
    });

    let autoScroll = setInterval(() => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScroll) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);

    function resetAutoScroll() {
      clearInterval(autoScroll);
      autoScroll = setInterval(() => {
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (track.scrollLeft >= maxScroll) {
          track.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          track.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }, 3000);
    }

    track.addEventListener("mouseenter", () => clearInterval(autoScroll));
    track.addEventListener("mouseleave", () => resetAutoScroll());
  }

  const hasLoaded = sessionStorage.getItem("hasLoaded");
  if (!hasLoaded) {
    sessionStorage.setItem("hasLoaded", "true");
    runLoaderSequence();
  } else {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    if (loaderWrapper) loaderWrapper.style.display = "none";
    document.querySelectorAll("video").forEach(v => {
      v.preload = "auto";
      v.play().catch(() => {});
    });
  }

  function runLoaderSequence() {
    const loaderWrapper = document.querySelector(".loader-wrapper");
    document.querySelectorAll("video").forEach(v => { v.preload = "none"; });
    setTimeout(() => {
      if (loaderWrapper) loaderWrapper.classList.add("hidden");
      setTimeout(() => {
        if (loaderWrapper) loaderWrapper.style.display = "none";
      }, 500);
    }, 2500);
  }

});