# 個人のWebサイトを建てよう！

### ソフトウェア開発スキルを披露しよう！

このリポジトリは、ソフトウェア開発者としてのあなたの作品を展示する、個人のWebサイトをキックスタートするのに必要なコードを提供します。そして、GitHubリポジトリ中のコードを変更したときは、管理者の写真、説明欄、リポジトリといったプロフィール情報を、Webページは自動的に更新します。

しかし、あなたの個人のWebサイトはカスタマイズされるのを待っています。言語や業界など、ソフトウェア開発に興味がある特定の分野を強調するスペースがあります。そして、あなたの素晴らしいブログ記事を公開されるのを待っています。

これらはすべて、以下の3つのサービスを組み合わせることで可能です。
 - Webサイトの構築：[Jekyll](https://jekyllrb.com/docs/)
 - サイトのホスティング：[GitHub Pages](https://pages.github.com/)
 - コンテンツの自動埋め込み：[GitHub's API](https://developer.github.com/v3/)

## インストールしよう！

### `github/personal-website` Repository をForkする

「個人のWebサイトスターター」Repoのコピーを自分で作ることになるので、自分だけのプロジェクトをカスタマイズすることが可能です。「Fork」というのは、Repoをコピーすることです。では早速、[`github/personal-website` Repo](https://github.com/github/personal-website)のページ上部「Fork」を選択しましょう。

ForkしたRepoを見つけたらもう、それはあなたのものです。あなたが所有者なので、望むなら公開することだってできます。

### ローカルの開発環境にインストールする

ローカルのWeb開発環境でWebサイトを管理したいなら、[Ruby](https://jekyllrb.com/docs/installation/)を使用することになります。

ForkしたRepoを見つけたら、**[Cloneしましょう](https://help.github.com/articles/cloning-a-repository/)**。「Clone」とは、ざっくり言えば、オンラインにあるソースを**そのまま**ローカルに落とすことです。ファイルはもちろん、変更履歴だって複製されます。

#### Jekyllをインストールする

Jekyllは、ほとんどのシステムにインストールできる、[Ruby Gem](https://jekyllrb.com/docs/ruby-101/#gems)です。

1. [Ruby開発環境](https://jekyllrb.com/docs/installation/)すべてをインストールします。
2. Jekyllと[bundler](https://jekyllrb.com/docs/ruby-101/#bundler)、[gems](https://jekyllrb.com/docs/ruby-101/#gems)をインストールします。
```
gem install jekyll bundler
```
3. ディレクトリを移動します。
```
cd personal-website
```
4. 不足しているGem（依存関係）をインストールします。
```
bundle install
```
5. サイトを構築し、ローカルサーバーで立ち上げます。
```
bundle exec jekyll serve
```

こんなものが見えると思います:

```
Configuration file: /octocat/personal-website/_config.yml
            Source: /octocat/personal-website
       Destination: /octocat/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
   GitHub Metadata: No GitHub API authentication could be found. Some fields may be missing or have incorrect data.
                    done in 14.729 seconds.
 Auto-regeneration: enabled for '/octocat/personal-website'
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
```

"No GitHub API authentication could be found" というメッセージは気にしないでください。[API認証](https://github.com/jekyll/github-metadata/blob/master/docs/authentication.md)は、ブランチ名など、より詳細なデータを表示したい場合に必要なだけです。

6. では、[http://localhost:4000](http://localhost:4000) を開きましょう。

### 公開する

個人のWebサイトのコードをGitHubでホスティングすると、GitHub Pagesを通して無料でサポートを受けることができます。

**一番手っ取り早い方法**は、Repoの名前を `username.github.io` に変更することです（`username`には、あなたもしくは組織のGitHubユーザー名が入ります）。次に、Repoの `master` ブランチに変更をあげると、Web上で `username.github.io` にアクセスできるようになります。

**もしカスタムドメインを使いたいなら、**GitHubのRepoの、Settingsタブにある「Custom domain」に追加してください。そして、[DNSプロバイダーにドメインを追加(and/or)設定](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/)しましょう。

## カスタマイズ

これはあなたのWebサイトで、ソースコードもあなたが管理しています。そのため、あなたが望むなら、すべてをカスタマイズできます。ここでは簡単なカスタマイズ方法をいくつかご紹介します。

### 簡単な設定

ほとんどのカスタマイズは、Repo内の `_config.yml` ファイルを修正して、数秒のうちに行うことができます。新しい変更を保存するたびにローカルサーバーを再起動するのを忘れないように！素晴らしいWebサイトが正しく再構築されないかもしれません。方法は以下の通りです。

1. <kbd>CTRL</kbd>+<kbd>c</kbd>を入力してサーバーをシャットダウンします。
2. `bundle exec jekyll serve`でサーバーを再起動します。


#### レイアウト

あなたのWebサイトは、大画面のデバイスでは、デフォルトでは2列のレイアウトで表示され、写真、名前、基本情報は左寄せの「サイドバー」に表示されます。この場合、`_config.yml`内の `layout: sidebar` の行を `layout: stacked` に変更することで、「スタック型」の、1列のレイアウトに素早く切り替えることができます。

#### スタイル

あなたのWebサイトは、デフォルトでは白とグレーの「明るい」背景に、「暗い」テキストが表示されます。`_config.yml` の `style: light` の行を `style: dark` に変更することで、背景を「暗く」、テキストを「白く」することができます。

#### プロジェクト

「My Projects」（注：PC部のWebサイトでは「Our Projects」）セクションは、デフォルトでは、「最近変更された9つのRepo」で生成されます。また、Forkしたものは除外されています。しかし、これらのパラメータは、 `_config.yml` の `projects` 辞書行ですぐにカスタマイズできます。

パラメータには、以下のようなものがあります:

- `sort_by`: ソートされる方法。`pushed`（更新順） or `stars`（Star数）.
- `limit`: セクションに表示される最大のRepoの個数。初期状態では、`9`に設定されています。
- `exclude`:
   - `forks`: `true`の場合、Forkしたものは除外されます。
   - `projects`: 除外したいRepo名のリスト。

#### Topics

あなたのWebサイトには、3つのトピックがあらかじめ設定されており、「My Interests」（注：PC部のWebサイトでは「Our Interests」）セクションに表示されます。`_config.yml` ファイルには各トピックの名前と2つのオプションの詳細を定義できます。

- `web_url`: トピックにリンクするアドレス (例: `https://github.com/topics/sass`)。
- `image_url`: トピックと表示する（理想では正方形の）画像。

#### ソーシャルメディア

Behance、Dribbble、Facebook、LinkedIn、Medium、Stack Overflow、Twitter、YouTubeなど、あなたが利用しているSNSへのリンク共有をサポートしています。

1. `_config.yml` のファイルを開きます。
2. `social_media` 辞書行を編集し、好きなサービスを `key: value` 形式で保存します。以下がその例です。

```
social_media:
  behance: your_username
  dribbble: your_username
  facebook: your_username
  hackerrank: your_username
  instagram: your_username
  keybase: your_username
  linkedin: your_username
  medium: your_username
  stackoverflow: your_user_id
  telegram: your_username
  twitter: your_username
  unsplash: your_username
  vk: your_username
  website: http://your_website_url
  youtube: your_username
```

あなたが定義した各サービスのプロフィールへのリンクは、`<header>`に表示され、あなたの説明欄に追加されます。また、それらのサービスが共有をサポートしている場合、あなたが公開するブログ記事には、各サービスを使ってその記事を共有するためのリンクが含まれます。

**注**: この機能はRepo内の2ファイルでサポートされています:

- `/_data/social_media.yml`: 変数名、表示名、URL、SVGアイコンなど、サポートする各サービスを定義します。
- `/_includes/social_media_share_url.html`: 共有URLに対応しているSNSのいずれかに必要なURLを出力します。

このRepoでまだサポートされていないSNSを追加したい場合には、これら2つのファイルを編集してサポートを構築してください。

## ページを追加する

**ページを追加する**には (例えば、詳細な履歴書など):

1. 新しい `.html` or `.md` ファイルをRepoのルートに作成します。
2. URLに使用したいファイル名を指定します。(例: `http://yoursite.dev/filename`)
3. ファイルの先頭に以下の[front matter](https://jekyllrb.com/docs/front-matter/)を加えます:

```
---
layout: default
---
```

## ブログ記事を追加する

**ブログ記事を追加する**には:

1. 新しい`.md`ファイルを `/_posts/` に作成します。
2. ファイル名を以下のフォーマットで指定します。:

```
{年}-{月}-{日}-{タイトル}.md
```

3. ファイルの先頭に以下の[front matter](https://jekyllrb.com/docs/front-matter/)を加えます:

```
---
title: "ブログ記事のタイトル"
---
```

Your website comes with a placeholder blog post that you can reference. Notably, its [front matter](https://jekyllrb.com/docs/front-matter/) declares `published` as `false`, so that it won't appear on your website.

While you can define a `layout` in the front matter, your website is pre-configured to assign the `post` layout to all of the posts in your `/_posts/` directory. So you don't have to declare that in your posts.

Jekyll's conventions for authoring and managing blog posts is very flexible. You can [learn more in Jekyll's documentation for "Posts."](https://jekyllrb.com/docs/posts/)

## Content and templates

To give you a sound foundation to start your personal website, your repository includes a handful of "includes" -- dynamic `.html` files that are re-used throughout your website. They're all stored in the `/_includes/` directory.

There are the usual suspects, like `header.html` and `footer.html`. But there are few more worth pointing out:

- `interests.html`: A heading and dynamic list of "My Interests," which is populated with the [topics](#topics) you list in your `_config.yml`.
- `masthead.html`: A collection of your avatar, name, bio, and other metadata that's displayed prominently on all your webpages to help identify what the website is about.
- `post-card.html`: A compact, summarized presentation of a blog post, re-used to display a listing of your latest blog posts.
- `projects.html`: A heading and dynamic list of "My Projects," which is populated with a listing of your newest GitHub repositories.
- `repo-card.html`: A compact, summarized presentation of a repository, re-used to display a listing of your GitHub repositories.
- `thoughts.html`: A heading and dynamic list of "My Thoughts," which is populated with a listing of your latest blog posts.
- `topic-card.html`: A compact, summarized presentation of a topic (defined in your `_config.yml`), re-used to display a listing of your interests.

### Layouts

Your repository comes with three layouts:

- **default**: Not used by any of the built-in pages or posts, but useful for any new pages you create.
- **home**: Used by your `index.html` homepage to display listings of your projects, interests, and (optionally) your blog posts.
- **post**: Used by default by the posts in your `/_posts/` directory.

Jekyll's convention for defining layouts is very flexible. You can [learn more about customizing your layouts in the Jekyll "Layouts" docs.](https://jekyllrb.com/docs/layouts/)

## Styles

Your website is pre-configured to use [GitHub's very flexible CSS framework called "Primer,"](https://styleguide.github.com/primer/). It's currently referenced within your `styles.scss` file, using the CSS import at-rule:

```
@import url('https://unpkg.com/primer/build/build.css');
```

You are, of course, welcome to remove it or replace it with another framework. Just bear in mind that the HTML that your website came pre-packaged with references multiple Primer "utility classes" to define things like column widths, margins, and background colors.

You also have the option to add on to and extend Primer's styles by adding custom CSS to your `/assets/styles.scss` Sass stylesheet. By editing this file, you can customize your website's color scheme, typography, and more.


## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
