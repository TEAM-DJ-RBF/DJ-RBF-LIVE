
function toggleMenu() {
  const dropdown = document.getElementById('dropdown');
  dropdown.classList.toggle('hidden');
}

// Dummy waveform animation
const canvas = document.getElementById("waveform");
const ctx = canvas.getContext("2d");

function drawWave() {
  canvas.width = window.innerWidth;
  canvas.height = 30;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const bars = 100;
  for (let i = 0; i < bars; i++) {
    const height = Math.sin(Date.now() / 200 + i) * 10 + 15;
    ctx.fillStyle = "rgba(255, 165, 0, 0.6)";
    ctx.fillRect(i * (canvas.width / bars), canvas.height - height, 4, height);
  }
  requestAnimationFrame(drawWave);
}
drawWave();
