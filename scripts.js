// Draws a small static "seek" illustration on any <canvas data-demo="seek">.
// Replace drawSeekDemo with your own simulation (see slide "Interactive Simulation").
(function () {
  function drawSeekDemo(canvas) {
    const ctx = canvas.getContext("2d");
    const w = canvas.width, h = canvas.height;
    const css = getComputedStyle(document.documentElement);
    const accent = css.getPropertyValue("--accent").trim() || "#38bdf8";
    ctx.clearRect(0, 0, w, h);

    const agent = { x: w * 0.2, y: h * 0.65 };
    const target = { x: w * 0.75, y: h * 0.3 };

    // target
    ctx.strokeStyle = "#f59e0b"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(target.x, target.y, 16, 0, Math.PI * 2); ctx.stroke();

    // desired velocity (dashed)
    ctx.setLineDash([8, 6]); ctx.strokeStyle = accent; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(agent.x, agent.y); ctx.lineTo(target.x, target.y); ctx.stroke();
    ctx.setLineDash([]);

    // agent (triangle pointing right)
    ctx.fillStyle = accent;
    ctx.beginPath();
    ctx.moveTo(agent.x + 18, agent.y);
    ctx.lineTo(agent.x - 12, agent.y - 11);
    ctx.lineTo(agent.x - 12, agent.y + 11);
    ctx.closePath(); ctx.fill();

    ctx.fillStyle = "#8fa3bf"; ctx.font = "16px sans-serif";
    ctx.fillText("[Canvas simulation placeholder]", 16, h - 14);
  }

  function init() {
    document.querySelectorAll("canvas[data-demo='seek']").forEach(drawSeekDemo);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
