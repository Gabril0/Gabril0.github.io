const wiiClock = () => {
  const t = document.getElementById("wii-time");
  const d = document.getElementById("wii-date");
  if (!t) return;
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes().toString().padStart(2, "0");
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  t.innerHTML = `${h}:${m}<span class="wii-ampm">${ampm}</span>`;
  if (d) {
    d.textContent = now.toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  }
};
wiiClock();
setInterval(wiiClock, 1000 * 10);
