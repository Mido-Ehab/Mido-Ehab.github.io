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
    title: "Some OpenGl, SFML Projects",
    description: "A collection of OpenGL projects built with SFML, showcasing various graphics techniques and effects.",
    image:"",
    link:"https://drive.google.com/drive/folders/1a7H7VdzCQ12hbmBzKVbRkYxL7Ldr2EbX?usp=sharing"
  },
   {
    title: "GD50 Lua Projects",
    description: "A collection of Lua projects built with the GD50 framework, showcasing various game mechanics and features.",
    image:"",
    link:"https://drive.google.com/drive/folders/1JzKb0ZIozVlfNOJ6vtYgwxE_yLT7PX3Q?usp=sharing"
  },
    {
    title: "Endless Runner Game",
    description: "A 3D endless runner game built with Unity, featuring a player controller, obstacles, and collectibles.",
    image:"Images/EndlessRunnerGame/EndlessRunnerGame.png",
    link:"https://drive.google.com/file/d/1wo43gyXhpJSaOL_GtvhNbfydhn-nL-iw/view?usp=sharing"
  },
  {
    title: "Integrating Convai in Unreal Engine 5",
    description: "Using convai with readyplayer me characters in Unreal Engine 5.",
    image: "Images/UnrealConvai/Convai.png",
    link: "https://drive.google.com/file/d/1cADL1VGbhmwdjWZxqphSSdFEcs1zLa_v/view?usp=sharing",
  },
  {
    title: "SpiderSonic 2D Game",
    description: "A 2D platformer game built with Unity",
    image:"Images/2D/SpiderSonic.png",
    link:"https://mido-ehab-221.itch.io/spidersonic"
  },
  {
    title: "Maze ball Simble Unity Game",
    description: "Unity game where you control a ball to reach the end of the maze click view more if You want to try it.",
    image: "Images/MazeBall/MazeBall.png",
    link: "https://mido-ehab-221.itch.io/maze-ball"
  },
  {
    title: "Terrain Design",
    description: "A collection of terrain designs created using Unity's Terrain tools, showcasing various landscapes and environments.",
    image: "Images/Terrain/Forest.jpg",
    link: "https://drive.google.com/drive/folders/1mZhmWzK5fYaVdjSEvc03u7Q19x-tpAc9?usp=sharing"
  },
  {
    title: "Shatta Personality Quiz ",
    description: "Freelance project for a client, a personality quiz game built with Unity.",
    image: "Images/FreelanceProjects/Shatta/ShattaFreelance.jpg",
    link: "https://www.linkedin.com/posts/mohamed-ehab-shalaby-805b9321b_freelance-unity-gamedev-activity-7316587853809901569-tLUH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADeGpcUBnUygQZEnRrpAlYJIO8l_fN3BtYc"
  },
  {
    title: "Network Game Using NetCode For GameObjects",
    description: "A networked game built with Unity's NetCode for GameObjects, featuring a player controller and a simple shooting mechanic.",
    image: "Images/NetCode/NetCode.png",
    link:"https://drive.google.com/file/d/1wZMlrlhyZ9w3s2e8HERx6hIZvBf1JMlC/view?usp=drive_link"
  },
    {
    title: "ShootOBS FPS Unity Game",
    description: "A simple FPS game built with Unity, featuring a player controller, shooting mechanics And AI Enemies",
    image: "Images/ShootOBS/ShootOBS.png",
    link:"https://mido-ehab-221.itch.io/shootobs"
  },
  {
    title: "MoonKnight Ultimate C++ UE5 ",
    description: "Unreal Engine C++ Try to Copy MoonKnight ultimate mechanic and effect from Marvel Rivals game",
    image: "Images/MoonKnight/MoonKnightUlt.jpg",
    link: "https://drive.google.com/file/d/1CBxtTBHWg47sNCa5lY3mJwhmwqH20Uk4/view?usp=sharing"
  },
  {
    title:"Shaders",
    description: "A collection of shaders created using Unity's Shader Graph & HLSL, showcasing various visual effects.",
    image:"Images/Shaders/Shaders.png",
    link: "https://drive.google.com/drive/folders/1y2i4imEtZP59N0PMV7ryv2NyXAsXTHkF?usp=sharing"
  },
{
    title: "AR Whack a Mole",
    description: "An Augmented Reality game built with Unity, where players can interact with virtual moles in the real world.",
    image: "Images/AR/ARProject.png",
    link: "https://drive.google.com/file/d/1wchn_n5FjSz0nHB28ca43IVowDNNo1qI/view?usp=sharing",
  },
  {
    title: "Invasion VR FPS",
    description: "A VR FPS game built with Unity shooting mechanics, and AI enemies.",
    image: "Images/FPSVR/InvasionVR.png",
    link: "https://mido-ehab-221.itch.io/invasion-vr-fps-game"
  },
  {
    title: "Shidijia (Battle Royale)",
    description: "Offline battle royale built with Unreal Engine 5 featuring impressive views & smart AI enemies.",
    image: "Images/Shidiji/Shidiji.png",
    link: "https://drive.google.com/drive/folders/1ZZQCZ_NFiu_HFRQL7lF14Rok4oBSRGJV?usp=sharing",
  },
  
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