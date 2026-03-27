document.addEventListener("DOMContentLoaded", () => {

  const crewData = {
    luffy:   { name: "Monkey D. Luffy",   role: "Captain",       bounty: "฿ 3,000,000,000", fruit: "Hito Hito no Mi, Model: Nika", origin: "Foosha Village, East Blue",      bio: "The founder and captain of the Strew Hat Pirates. His dream is to find the One Piece and become King of the Pirates.",               quote: '"I\'m going to be King of the Pirates!"', img: "https://i.pinimg.com/736x/30/c4/95/30c495f7ce30739e4757c4b327ee1fad.jpg" },
    zoro:    { name: "Roronoa Zoro",       role: "Swordsman",     bounty: "฿ 1,111,000,000", fruit: "None",                         origin: "Shimotsuki Village, East Blue",  bio: "A master swordsman who aims to become the world's greatest. He uses the three-sword style — Santoryu.",                               quote: '"Nothing happened."',                     img: "https://i.pinimg.com/736x/a8/56/0f/a8560fb2df083c65d66e90d94e533a27.jpg" },
    nami:    { name: "Nami",               role: "Navigator",     bounty: "฿ 366,000,000",   fruit: "None",                         origin: "Cocoyasi Village, East Blue",    bio: "The navigator of the Strew Hats. She can read weather patterns perfectly and wields the Clima-Tact.",                                  quote: '"Steal from pirates and give to me."',    img: "https://i.pinimg.com/736x/aa/17/6c/aa176c8d2e1809dcb08044e98bc318b3.jpg" },
    usopp:   { name: "Usopp",              role: "Sniper",        bounty: "฿ 500,000,000",   fruit: "None",                         origin: "Syrup Village, East Blue",       bio: "The sharpshooter of the crew. A gifted inventor and storyteller who strives to be a brave warrior of the sea.",                       quote: '"I am the great warrior, Sogeking!"',     img: "https://i.pinimg.com/736x/de/4e/b8/de4eb82ffaf0298c06ec2e7c551daf37.jpg" },
    sanji:   { name: "Sanji",              role: "Cook",          bounty: "฿ 1,032,000,000", fruit: "None",                         origin: "Baratie, East Blue",             bio: "The cook of the Strew Hats. He only fights with his legs and dreams of finding the All Blue.",                                         quote: '"I\'ll never use my hands in a fight."',  img: "https://i.pinimg.com/736x/6e/6b/29/6e6b29ce394647239b93cf79e83583a6.jpg" },
    chopper: { name: "Tony Tony Chopper",  role: "Doctor",        bounty: "฿ 1,000",         fruit: "Hito Hito no Mi",              origin: "Drum Island, Grand Line",        bio: "A reindeer who ate the Human-Human Fruit. He dreams of becoming a doctor who can cure any disease.",                                   quote: '"I\'m not a tanuki!"',                    img: "https://i.pinimg.com/736x/f7/88/b4/f788b425b9afba3c604c8c5dd9ca3a3e.jpg" },
    robin:   { name: "Nico Robin",         role: "Archaeologist", bounty: "฿ 930,000,000",   fruit: "Hana Hana no Mi",              origin: "Ohara, West Blue",               bio: "The archaeologist of the Strew Hats. She seeks the truth of the Void Century and the meaning of the Poneglyphs.",                     quote: '"I want to live!"',                       img: "https://i.pinimg.com/736x/11/ed/29/11ed299da2074b60d999a68a08cd7019.jpg" },
    franky:  { name: "Franky",             role: "Shipwright",    bounty: "฿ 394,000,000",   fruit: "None",                         origin: "South Blue",                     bio: "The cyborg shipwright who built the Thousand Sunny. His dream is to build a ship that sails to the end of the world.",                 quote: '"SUPER!"',                                img: "https://i.pinimg.com/736x/eb/35/fe/eb35fea92265735e76eb1fc83b18fe7c.jpg" },
    brook:   { name: "Brook",              role: "Musician",      bounty: "฿ 383,000,000",   fruit: "Yomi Yomi no Mi",              origin: "West Blue",                      bio: "A living skeleton musician who returned to life thanks to his Devil Fruit. He dreams of reuniting with Laboon.",                       quote: '"Yohohoho!"',                             img: "https://i.pinimg.com/736x/3d/af/f4/3daff4e176186f9fbd0de6979c58e58a.jpg" },
    jinbe:   { name: "Jinbe",              role: "Helmsman",      bounty: "฿ 1,100,000,000", fruit: "None",                         origin: "Fishman Island",                 bio: "A fish-man martial arts master and former Warlord of the Sea. He is a master of Fishman Karate.",                                     quote: '"A man\'s worth is not determined by his birth, but by his actions."', img: "https://i.pinimg.com/1200x/f1/3d/c9/f13dc9d0e2195ba918203177600b52e0.jpg" },
  };

  const overlay     = document.getElementById('crewDetailOverlay');
  const cards       = document.querySelectorAll('.crew-card');
  const closeBtn    = document.getElementById('crewClose');
  const closeBtnBot = document.getElementById('crewCloseBtn');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const d = crewData[card.dataset.crew];
      if (!d) return;
      document.getElementById('crewImg').src            = d.img;
      document.getElementById('crewName').textContent   = d.name;
      document.getElementById('crewRole').textContent   = d.role;
      document.getElementById('crewQuote').textContent  = d.quote;
      document.getElementById('crewBounty').textContent = d.bounty;
      document.getElementById('crewFruit').textContent  = d.fruit;
      document.getElementById('crewOrigin').textContent = d.origin;
      document.getElementById('crewBio').textContent    = d.bio;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closePanel() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  closeBtn.addEventListener('click', closePanel);
  closeBtnBot.addEventListener('click', closePanel);
  overlay.addEventListener('click', e => { if (e.target === overlay) closePanel(); });

});