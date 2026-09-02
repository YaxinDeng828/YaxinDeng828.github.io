---
layout: home
title: Sitemap
permalink: /sitemap/
---

<main class="home-shell">
  <div class="home-layout">
    <article class="home-content">
      <section class="home-section" aria-labelledby="sitemap-title">
        <h2 id="sitemap-title">Sitemap</h2>
        <ul>
          {% for page in site.pages %}
            {% unless page.url == '/sitemap/' or page.url == '/404.html' %}
              <li><a href="{{ page.url | relative_url }}">{{ page.title | default: page.url }}</a></li>
            {% endunless %}
          {% endfor %}
          {% for publication in site.publications %}
            <li><a href="{{ publication.url | relative_url }}">{{ publication.title }}</a></li>
          {% endfor %}
        </ul>
      </section>
    </article>
  </div>
</main>
