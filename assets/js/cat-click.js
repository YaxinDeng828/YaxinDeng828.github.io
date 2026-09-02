(function () {
  "use strict";

  var script = document.currentScript;
  var icon = script && script.dataset.pawIcon;
  var nextAngle = -8;

  if (!icon) {
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
    effect.className = "cat-click-effect";
    effect.src = icon;
    effect.alt = "";
    effect.setAttribute("aria-hidden", "true");
    effect.style.left = event.clientX + "px";
    effect.style.top = event.clientY + "px";
    effect.style.setProperty("--cat-angle", nextAngle + "deg");
    nextAngle *= -1;

    document.body.appendChild(effect);
    effect.addEventListener("animationend", function () {
      effect.remove();
    }, { once: true });
  });
}());
