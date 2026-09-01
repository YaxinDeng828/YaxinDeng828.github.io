(function () {
  "use strict";

  var storageKey = "site-language";
  var savedLanguage = localStorage.getItem(storageKey);
  var language = savedLanguage === "zh" ? "zh" : "en";

  document.documentElement.setAttribute("data-language", language);
  document.documentElement.setAttribute("lang", language === "zh" ? "zh-CN" : "en");

  function updateLanguage(languageSetting) {
    language = languageSetting === "zh" ? "zh" : "en";
    localStorage.setItem(storageKey, language);
    document.documentElement.setAttribute("data-language", language);
    document.documentElement.setAttribute("lang", language === "zh" ? "zh-CN" : "en");
    document.title = language === "zh" ? "邓雅馨" : "Deng Yaxin";

    document.querySelectorAll("[data-alt-en]").forEach(function (image) {
      image.setAttribute("alt", language === "zh" ? image.dataset.altZh : image.dataset.altEn);
    });

    var toggle = document.querySelector("#language-toggle .language-toggle");
    if (toggle) {
      toggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换为中文");
      toggle.setAttribute("aria-pressed", language === "zh" ? "true" : "false");
      toggle.querySelector(".language-toggle__label").textContent = language === "zh" ? "English" : "中文";
    }
  }

  function initializeLanguageToggle() {
    updateLanguage(language);
  }

  document.addEventListener("click", function (event) {
    var toggle = event.target.closest("#language-toggle .language-toggle");
    if (toggle) {
      event.preventDefault();
      updateLanguage(language === "zh" ? "en" : "zh");
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeLanguageToggle);
  } else {
    initializeLanguageToggle();
  }
}());
