---
layout: post
title:  "jekyll,minimaの編集方法、ターミナル基本コマンド"
date:   2024-10-28 01:53:04 +0900
categories: jekyll update
---
jekyll,minimaのレイアウトを変更する方法。

**目次**
* TOC
{:toc}

## minimaで出来上がったサイトを編集するには
* いくつかのファイルを作成、編集する必要がある
  * ルートディレクトリにフォルダ、ファイルを追加する
    * _layouts(フォルダ)
      * default.html
      * post.html
    * assets/css（フォルダ）
      * styles.css
  * index.markdownの編集

<br>

## ターミナル操作

ターミナル基本コマンド
* ターミナルの起動方法:「⌘ + スペース」を押して「ターミナル」と入力

* pwd: 現在のディレクトリ（フォルダ）のパスを表示する。

* ls: 現在のディレクトリ内のファイルとフォルダのリストを表示する。

* cd [ディレクトリ名]: 指定したディレクトリに移動する（例：cd Documents）。

* cd ..：一つ前のディレクトリに戻る

* jekyll serve:jekyllを起動

* bundle exec jekyll serve：jekyllを起動

* mkdir [フォルダ名]: 新しいフォルダを作成する（例：mkdir new_folder）。

* rmdir [フォルダ名]: 空のフォルダを削除する。

* rm [ファイル名]: 指定したファイルを削除する（例：rm file.txt）。

* rm -r [フォルダ名]: 指定したフォルダとその中のすべてのファイルを削除する。

* cp [元ファイル] [コピー先]: ファイルをコピーする（例：cp file.txt backup.txt）。

* mv [元ファイル] [新しい名前]: ファイルの名前を変更または移動する（例：mv oldname.txt newname.txt）。

* open [ファイル名]: 指定したファイルをデフォルトのアプリケーションで開く（例：open document.pdf）。

* nano [ファイル名]: 指定したファイルをnanoエディタで開く（例：nano myfile.txt）。

* clear: ターミナル画面をクリアする。

システム情報
* top: システムのプロセスやリソース使用状況を表示する。

* df -h: ディスクの使用状況を表示する。

* du -sh [ディレクトリ名]: 指定したディレクトリのサイズを表示する（例：du -sh Documents）。


ネットワーク
* ping [ホスト名]: 指定したホストへの接続をテストする（例：ping google.com）。

* curl [URL]: 指定したURLの内容を取得する（例：curl https://example.com）。

ヘルプ
* man [コマンド名]: 指定したコマンドのマニュアルを表示する（例：man ls）。

<br>