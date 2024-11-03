---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: ホーム
---


{% comment %} 投稿一覧の表示 {% endcomment %}
<h1>posts</h1>
<div class="post-list">
  {% for post in site.posts %}
    <article class="post">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</p>
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
    </article>
  {% endfor %}
</div>