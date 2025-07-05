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
    title: "Integrating Convai in Unreal Engine 5",
    description: "Using convai with readyplayer me characters in Unreal Engine 5.",
    image: "Images/UnrealConvai/Convai.png",
    link: "https://drive.google.com/file/d/1cADL1VGbhmwdjWZxqphSSdFEcs1zLa_v/view?usp=sharing",
  },
  {
    title: "Maze ball Simble Unity Game",
    description: "Unity game where you control a ball to reach the end of the maze click view more if You want to try it.",
    image: "Images/MazeBall/MazeBall.png",
    link: "https://mido-ehab-221.itch.io/maze-ball"
  },
{
    title: "Shidijia (Battle Royale)",
    description: "Offline battle royale built with Unreal Engine 5 featuring impressive views & smart AI enemies.",
    image: "Images/Shidiji/Shidiji.png",
    link: "https://drive.google.com/drive/folders/1ZZQCZ_NFiu_HFRQL7lF14Rok4oBSRGJV?usp=sharing",
  },
   {
    title: "MoonKnight Ultimate C++ UE5 ",
    description: "Unreal Engine C++ Try to Copy MoonKnight ultimate mechanic and effect from Marvel Rivals game",
    image: "Images/MoonKnight/MoonKnightUlt.jpg",
    link: "https://drive.google.com/file/d/1CBxtTBHWg47sNCa5lY3mJwhmwqH20Uk4/view?usp=sharing"
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