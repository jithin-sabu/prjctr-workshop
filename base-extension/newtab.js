/* ===== Customise me ===== */
const YOUR_NAME = "Your Name"; // Change this to your name

// Quick links: label, URL, and local favicon in the icons/ folder
const QUICK_LINKS = [
  { label: "Gmail", url: "https://mail.google.com", icon: "icons/gmail.png" },
  { label: "YouTube", url: "https://www.youtube.com", icon: "icons/youtube.png" },
  { label: "GitHub", url: "https://github.com", icon: "icons/github.png" },
  { label: "Maps", url: "https://maps.google.com", icon: "icons/maps.png" },
];

/* ===== Greeting based on time of day ===== */
function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

function updateGreeting() {
  const greetingEl = document.getElementById("greeting");
  greetingEl.textContent = `${getGreeting()}, ${YOUR_NAME}`;
}

/* ===== Clock (hours:minutes) and today's date ===== */
function pad(n) {
  return String(n).padStart(2, "0");
}

function updateClock() {
  const now = new Date();

  // Time — hours and minutes only
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  document.getElementById("clock").textContent = `${hours}:${minutes}`;

  // Date — e.g. "Friday, 16 October 2026"
  const dateText = now.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  document.getElementById("date").textContent = dateText;
}

/* ===== Build the quick-link tiles ===== */
function renderQuickLinks() {
  const nav = document.getElementById("quick-links");

  QUICK_LINKS.forEach((link) => {
    const a = document.createElement("a");
    a.className = "tile";
    a.href = link.url;
    a.title = link.label;

    // Icon holder — shows favicon image, or first letter if the image fails
    const iconWrap = document.createElement("span");
    iconWrap.className = "tile-icon";

    const img = document.createElement("img");
    img.src = link.icon;
    img.alt = "";
    img.className = "tile-favicon";

    // If the favicon can't load, fall back to the site's first letter
    img.onerror = () => {
      img.remove();
      iconWrap.textContent = link.label.charAt(0);
    };

    iconWrap.appendChild(img);

    const label = document.createElement("span");
    label.className = "tile-label";
    label.textContent = link.label;

    a.appendChild(iconWrap);
    a.appendChild(label);
    nav.appendChild(a);
  });
}

/* ===== Start everything when the page loads ===== */
function init() {
  updateGreeting();
  updateClock();
  renderQuickLinks();

  // Refresh the clock every second so minutes stay accurate
  setInterval(updateClock, 1000);

  // Refresh greeting occasionally (in case you leave the tab open)
  setInterval(updateGreeting, 60 * 1000);
}

init();
