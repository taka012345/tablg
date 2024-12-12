---
layout: default
title: "2024 December"
permalink: /memo/12december/
---

※このページは開発者向けのMemoです

### december

**目次**
* TOC
{:toc}

<br>

##

## 【 jekyll 】minimaのスタイルを残しつつ編集する方法（jekyllのDL後からの編集方法記入）

minimaのレイアウトはgemで行われている。

なのでminimaを編集したいならそのレイアウトファイルやcssのファイルをコピーしてそれを編集することで可能となる

Jekyllでは、_layouts や assets/css のファイルを適切にコピーしてプロジェクト内に配置することで、Markdownの機能（たとえば、インラインコードやコードブロック）が正しく反映されるようになります。


Gemのレイアウトや CSS ファイルをコピー。必要なファイルをプロジェクトにコピーします

* _layouts/default.html（全体の基本レイアウト）

* _layouts/post.html（投稿用のレイアウト）

* assets/css/style.scss（スタイルシート）

* 必要に応じて _sass/minima/（部分スタイルファイル）

```
mkdir _layouts
cp $(bundle show minima)/_layouts/default.html _layouts/
cp $(bundle show minima)/_layouts/post.html _layouts/
```

* CSS のコピー Gem の assets/css/style.scss をプロジェクトの assets/css/ フォルダにコピーします。

```
mkdir -p assets/css
cp $(bundle show minima)/assets/css/style.scss assets/css/
```

* Sass の依存ファイルのコピー 必要に応じて _sass/minima/ ディレクトリもコピーします。

```
mkdir -p _sass/minima
cp -R $(bundle show minima)/_sass/minima _sass/
```
<br>

## 【 jekyll 】コードブロックにコードを記入する時&#123;% raw %&#125; と &#123;% endraw %&#125;を使う必要がある

&#123;% raw %&#125; と &#123;% endraw %&#125;を使うと、その間に含まれるLiquidタグやHTMLタグがJekyllによって処理されず、文字列としてそのまま表示されます

このコードを書かなければプログラムがコードを処理して余分な文字が出力されます

    書き方の例え）

    { % raw % }
    ここにコードを書き込む
    { % endraw % }

    ※raw,endrowの%と{}前後のスペースは削除する

<br>

## 【 jekyll 】&#123;% raw %&#125; と &#123;% endraw %&#125;を表示する方法
&#123;% raw %&#125; と &#123;% endraw %&#125;を表示するためのコード

    &#123;% raw %&#125;  &#123;% endraw %&#125;


そして&#38;#123; &#38;#125;を表示するためのコード

    &#38;#38;#123; &#38;#38;#125;

さらに&#38;#38;#38;#123;と表示するためのコード

    &#38;#38;#38;#123;　&#38;#38;#38;#125;

&#38;#123;とは


    HTML の 文字参照 (character reference) で、特定の文字を表示させるために使われます。
    これは、HTML における {（左中括弧）を表します。

    &#123; は {（左中括弧）を意味します。
    &#125; は }（右中括弧）を意味します。


&#38;#38;とは

    &#38; は文字 & をHTML文中で安全に表示する方法

    特殊文字としての & を誤解されないようにエスケープして使います。

    結論、説明読んだけどよくわからん


default.htmlにコードを入力



    {% raw %}
    <!DOCTYPE html>
    <html lang="{{ site.lang | default: 'en' }}">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ page.title | escape }} | {{ site.title | escape }}</title>
        <link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">
        {% include head.html %}
      </head>
      <body>
        <header>
          {% include header.html %}
        </header>
        <main class="page-content" aria-label="Content">
          {{ content }}
        </main>
        <footer>
          {% include footer.html %}
        </footer>
      </body>
    </html>
    {% endraw %}



<br>

## 専門用語

トークンとは
* 一度しか使えないPWを作るソフトや機器
* ブロックチェーンを基盤にして発行されるデジタル資産。ブロックチェーンとは少し違う。

フロントマターとは

* YAML形式で記述されているページ

コードブロック（バッククォート）とは

* コードなどの文字を分けて表示させることができる

Liquidとは

* jekyllのテンプレートエンジン。動的にコンテンツを生成する。

拡張機能とは

* プログラムに追加機能をすること

jekyll sassとは

* jekyllに組み込まれているcssの拡張機能

webでのタグ

* 情報の位置付けや分類する文字列

<br>

## 【 jeykll 】インラインコード、コードブロックを有効にする

cssにコードを追加する
```
/* インラインコード */
code {
  font-family: 'Courier New', monospace;
  background-color: #f5f5f5; /* Minimaテーマのデフォルト背景色 */
  color: #d63384; /* Jekyllのリンクカラー */
  padding: 2px 4px;
  border-radius: 4px;
}

/* コードブロック */
pre {
  background-color: #f5f5f5; /* Minimaテーマの背景色 */
  color: #333; /* ベース文字色 */
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto; /* 横スクロール対応 */
}

pre code {
  font-family: 'Courier New', monospace;
  background-color: inherit; /* 親要素(pre)の背景色を継承 */
  color: inherit; /* 親要素(pre)の文字色を継承 */
}
```


<br>

## 【 jekyll 】プラグインでサイトマップを作成する

* ディレクトリのGemfileに`gem "jekyll-sitemap"`を挿入

* ターミナルに`bundle install`と入力してインストール

* _config.ymlのpluginsに`jekyll-sitemap`を挿入

* ターミナルに`jekyll serve`で再起動

* _siteにsitemap.xmlが作成される

* ルートディレクトリにsitemap.xmlを作成して_siteのsitemap.xmlの内容をコピー

* githubにUP

* GoogleSearchConsoleからサイトマップが適応されるか確認