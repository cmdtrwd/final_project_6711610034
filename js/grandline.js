document.addEventListener("DOMContentLoaded", () => {

  const track = document.getElementById('arcTrack');
  const prev  = document.getElementById('arcPrev');
  const next  = document.getElementById('arcNext');
  if (track && prev && next) {
    const scrollAmount = 280;
    prev.addEventListener('click', () => track.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left:  scrollAmount, behavior: 'smooth' }));
  }

});