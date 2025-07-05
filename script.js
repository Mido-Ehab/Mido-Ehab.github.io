/* ───────────────────── Intersection‑Observer reveal ───────────────────── */
const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) observer.unobserve(e.target);
    e.target.classList.toggle('reveal', e.isIntersecting);
  }),
  { threshold: 0.25 }
);
document.querySelectorAll('section').forEach(sec => observer.observe(sec));

/* ───────────────────── Project logic ───────────────────── */
const projectsGrid = document.getElementById('projectsGrid');
const template = document.getElementById('projectCardTemplate');

// Add your projects manually here:
const projects = [
  {
    title: "Shidijia (Battle Royale)",
    description: "Multiplayer battle royale built with Unreal Engine 5 featuring dynamic zones & smart AI.",
    image: "Images/Shidiji/Shidiji.png",
    link: "https://drive.google.com/drive/folders/1ZZQCZ_NFiu_HFRQL7lF14Rok4oBSRGJV?usp=sharing",
    // video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Digital Twin House Demo",
    description: "Unreal Engine digital‑twin demo streaming real‑time IoT sensor data into a 3D smart‑home model.",
    image: "https://placehold.co/600x338?text=Digital+Twin",
    link: "https://github.com/your-repo/digital-twin"
  },
  {
    title: "Zombie Escape (3D Isometric)",
    description: "Unity survival‑puzzle game where players escape a zombie‑infested prison to deliver a vaccine.",
    image: "https://placehold.co/600x338?text=Zombie+Escape",
    link: "https://github.com/your-repo/zombie-escape"
  }
];

// Load projects from the array (not localStorage)
function loadProjects() {
  projectsGrid.innerHTML = '';
  projects.forEach(addProject);
}

// Add a card with a little “drop‑in” animation
function addProject({ title, description, image, link, video }) {
  const clone = template.content.cloneNode(true);
  const img   = clone.querySelector('img');
  img.src = image || `https://placehold.co/600x338?text=${encodeURIComponent(title)}`;
  img.alt = `${title} cover`;

  const vid = clone.querySelector('video');
  if (video) {
    vid.src = video;
    vid.style.display = 'block';
  } else {
    vid.style.display = 'none';
  }

  clone.querySelector('h3').textContent = title;
  clone.querySelector('p').textContent  = description;
  const anchor = clone.querySelector('a');
  anchor.href = link || '#';
  anchor.style.display = link ? 'inline-block' : 'none';

  const card = clone.querySelector('.card');
  card.style.opacity = 0; card.style.transform = 'translateY(40px)';
  projectsGrid.prepend(clone);
  requestAnimationFrame(() => {
    card.style.transition = 'all 450ms ease-out';
    card.style.opacity = 1; card.style.transform = 'translateY(0)';
  });
}

// Load projects on page load
loadProjects();

/* ───────────────────── Sample seed data ───────────────────── */
// [
  //   {
  //     title: 'Battle Royale Graduation Project',
  //     description: 'Multiplayer battle royale built with Unreal Engine 5 featuring dynamic zones & smart AI.',
  //     image: 'https://placehold.co/600x338?text=Battle+Royale',
  //     link: 'https://github.com/your-repo/battle-royale',
  //     video: 'https://www.w3schools.com/html/mov_bbb.mp4' // Example video
  //   },
  //   {
  //     title: 'Digital Twin House Demo',
  //     description: 'Unreal Engine digital‑twin demo streaming real‑time IoT sensor data into a 3D smart‑home model.',
  //     image: 'https://placehold.co/600x338?text=Digital+Twin',
  //     link: 'https://github.com/your-repo/digital-twin'
  //   },
  //   {
  //     title: 'Zombie Escape (3D Isometric)',
  //     description: 'Unity survival‑puzzle game where players escape a zombie‑infested prison to deliver a vaccine.',
  //     image: 'https://placehold.co/600x338?text=Zombie+Escape',
  //     link: 'https://github.com/your-repo/zombie-escape'
  //   }
  // ].forEach(addProject);
