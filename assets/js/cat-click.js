(function () {
  "use strict";

  var script = document.currentScript;
  var icons = [script && script.dataset.catIcon, script && script.dataset.pawIcon].filter(Boolean);
  var nextIcon = 0;

  if (!icons.length) {
    return;
  }

  document.addEventListener("click", function (event) {
    var target = event.target;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !target.closest) {
      return;
    }

    if (target.closest("a, button, input, textarea, select, summary, label")) {
      return;
    }

    var effect = document.createElement("img");
    var angle = nextIcon % 2 === 0 ? -8 : 8;

    effect.className = "cat-click-effect";
    effect.src = icons[nextIcon % icons.length];
    effect.alt = "";
    effect.setAttribute("aria-hidden", "true");
    effect.style.left = event.clientX + "px";
    effect.style.top = event.clientY + "px";
    effect.style.setProperty("--cat-angle", angle + "deg");
    nextIcon += 1;

    document.body.appendChild(effect);
    effect.addEventListener("animationend", function () {
      effect.remove();
    }, { once: true });
  });
}());
