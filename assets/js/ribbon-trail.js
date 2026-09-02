(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  if (reducedMotion.matches || !finePointer.matches) {
    return;
  }

  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  var ribbons = [];
  var frame = null;
  var lastPoint = null;
  var palette = ["#e59a9a", "#e7b76d", "#9dbb9b", "#89b5c5", "#b6a1c9"];

  canvas.setAttribute("aria-hidden", "true");
  canvas.style.position = "fixed";
  canvas.style.inset = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "39";
  document.body.appendChild(canvas);

  function resize() {
    var ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(window.innerWidth * ratio);
    canvas.height = Math.round(window.innerHeight * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function scheduleFrame() {
    if (!frame) {
      frame = window.requestAnimationFrame(draw);
    }
  }

  function addRibbon(x, y, angle) {
    var size = 4 + Math.random() * 4;
    ribbons.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 1.2,
      vy: -0.25 - Math.random() * 0.8,
      width: size,
      height: 1.5 + Math.random() * 2,
      angle: angle + (Math.random() - 0.5) * 1.4,
      spin: (Math.random() - 0.5) * 0.12,
      life: 0,
      maxLife: 28 + Math.random() * 18,
      color: palette[Math.floor(Math.random() * palette.length)]
    });
  }

  function handleMove(event) {
    if (event.pointerType && event.pointerType !== "mouse") {
      return;
    }

    var point = { x: event.clientX, y: event.clientY };
    if (!lastPoint) {
      lastPoint = point;
      return;
    }

    var dx = point.x - lastPoint.x;
    var dy = point.y - lastPoint.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 7) {
      return;
    }

    var count = Math.min(3, Math.floor(distance / 10));
    var angle = Math.atan2(dy, dx);
    for (var index = 0; index < count; index += 1) {
      var progress = (index + 1) / count;
      addRibbon(
        lastPoint.x + dx * progress,
        lastPoint.y + dy * progress,
        angle
      );
    }

    if (ribbons.length > 80) {
      ribbons.splice(0, ribbons.length - 80);
    }
    lastPoint = point;
    scheduleFrame();
  }

  function draw() {
    frame = null;
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (var index = ribbons.length - 1; index >= 0; index -= 1) {
      var ribbon = ribbons[index];
      ribbon.life += 1;
      ribbon.x += ribbon.vx;
      ribbon.y += ribbon.vy;
      ribbon.vy += 0.018;
      ribbon.angle += ribbon.spin;

      var opacity = 1 - ribbon.life / ribbon.maxLife;
      context.save();
      context.translate(ribbon.x, ribbon.y);
      context.rotate(ribbon.angle);
      context.globalAlpha = Math.max(0, opacity) * 0.72;
      context.fillStyle = ribbon.color;
      context.fillRect(-ribbon.width / 2, -ribbon.height / 2, ribbon.width, ribbon.height);
      context.restore();

      if (ribbon.life >= ribbon.maxLife) {
        ribbons.splice(index, 1);
      }
    }

    if (ribbons.length) {
      scheduleFrame();
    }
  }

  resize();
  window.addEventListener("resize", resize, { passive: true });
  document.addEventListener("pointermove", handleMove, { passive: true });
}());
