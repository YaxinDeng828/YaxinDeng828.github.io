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
    document.title = language === "zh" ? "邓雅馨" : "Yaxin Deng";

    document.querySelectorAll("[data-alt-en]").forEach(function (image) {
      image.setAttribute("alt", language === "zh" ? image.dataset.altZh : image.dataset.altEn);
    });

    document.querySelectorAll("#language-toggle [data-language-option]").forEach(function (option) {
      option.setAttribute("aria-pressed", option.dataset.languageOption === language ? "true" : "false");
    });
  }

  function initializeLanguageToggle() {
    updateLanguage(language);
  }

  document.addEventListener("click", function (event) {
    var option = event.target.closest("#language-toggle [data-language-option]");
    if (option) {
      event.preventDefault();
      updateLanguage(option.dataset.languageOption);
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeLanguageToggle);
  } else {
    initializeLanguageToggle();
  }
}());
