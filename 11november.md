---
layout: default
title: "2024 November"
permalink: /memo/11november/
---

※このページは開発者向けのMemoです

### november

**目次**
* TOC
{:toc}

## jekyllサイトにXのOGタグを設定する方法

* ターミナルを開く

* ファイルに移動して'_includes'と入力

* 次に'head.html'と入力

* 出来上がったhead.htmlのファイルにmetaを入力

これでXの投稿でタグが投稿される様になる

## XのOGタグのタイトルや説明を変更する方法

* タイトルの変更方法

    * mdと_config.ymlのtitleを変更する

* 説明の挿入方法

    * YAML（YAMLフロントマター）にdescriptionを挿入して説明を記入

* タイトルと説明のmetaの確認方法

    * ローカルで確認可能

    * 'ページのソースを表示'をクリックしてmetaを確認

<br>

## Gem化とは

jekyllのテーマをgemという形式でインストールしてる。

ファイルは直接編集できないから_layoutsのファイルなどが必要となる。


##　最近穏やかになった

時々口の悪い人につい文句を返してしっかりと喧嘩するなんてことがあります。

それは大体イライラしている時なんですが

今日もヤンキーのおっさんにどなられてつい反論しそうになったのですが

なんかわからないけどこっちの落ち度に対してちゃんと謝罪した上でやり過ごしました。

ちょっと自分の反応に驚きました。

これは最近だらだらと過ごしてストレスが少ないからかもしれません。

だらだら過ごすは大事ですね。

ストレスが少なく心に余裕があることは感情のコントロールがスムーズになるんですね。

## 適度に働いてダラダラとする

結論これなのかもしれない。

猫の様にだらだらとする時もあってもいい

普段できなかった事に手をつけられるし体も心も休まる

だけどだらだらと毎日を過ごすと次第に何もやる気が起きなくなり腐っていく

働きすぎると気が狂いそうになる

なので適度に働く

そうすると活力も湧いて、他のことにも着手する気持ちが湧き起こる

なので適度に働いて適度にだらだらする

これがいい生き方かもしれない

<br>

## やっぱり猫の様に生きることにした

忙しく生きることも違った。

ならもうやっぱいり猫の様に生きればいいか。

そしてやる気が出た時にうごけばいいか。

<br>

## 忙しく生きることも違った

忙しく生きてみたけどどうやらそれもちがった。

じゃあ一体自分は何を求めているのか。

それはより効率的で楽な生き方かも。

だらだらと過ごす日常でも忙しい日常でもない。

現状よりも生産的な日常を目標としているのが答えかも。

<br>

## 猫の様に生きるのは合わなかった

近所の猫をみて思っていたことがある。

彼らの様に毎日ダラダラと生きてみたいと。

しかし実際に毎日ダラダラと過ごしてみると何に対してもやる気が起こらなくなった。

そして毎日がなんだか虚しくなった。

だから悟った。自分は忙しい方が好きなのだと。

なので忙しく生きてみようと思う。成長もするし。

<br>

## jekyllで新しいファイルを作成した時にリンクさせる方法

「〇〇.md」のファイルを作成したが正しく読み込まれない
* 解決方法
    * 原因
        * baseurlが設定されている
    * 相対パスを使う
    * relative_urlフィルターを使う
        * baseurlや他の設定を考慮したリンクを作成
    * コード例
        * <a href="{{ '/memo/october/' | relative_url }}">October</a>
        * コードはdefault.htmlに記入

<br>

## 絶対パス、相対パス
* 絶対パス
    * 完全なURLを使用
* 相対パス
    * 現在位置から相対的にリンクを指定