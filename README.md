# next.js 入門

自分の備忘録として、next.js の使い方をまとめていきます。

## 目次

1. [next.js setup](#nextjs-setup)
2. [サーバサイドコンポーネントとクライアントサイドコンポーネント](#サーバサイドコンポーネントとクライアントサイドコンポーネント)
3. [環境変数の読み込み](#環境変数の読み込み)
4. [Layout について](#Layoutについて)

## next.js setup

[こちら](https://nextjs.org/docs/getting-started/installation)を参考に、next.js を Automatic Installation でインストールします。

```bash
npx create-next-app [your-app-name]
```

作成時に以下のような質問をされるので、必要に応じて選択してください。

```bash
$ npx create-next-app my-next-app
✔ Would you like to use TypeScript with this project? … No / Yes // 基本的にはTypeScriptので、Yesを選択
✔ Would you like to use ESLint with this project? … No / Yes // 基本的にはESLintので、Yesを選択
✔ Would you like to use Tailwind CSS with this project? … No / Yes // Tailwind CSSを使う場合はYesを選択
✔ Would you like to use `src/` directory with this project? … No / Yes // srcディレクトリを使う場合はYesを選択
✔ Use App Router (recommended)? … No / Yes // App Routerを使う場合はYesを選択
✔ Would you like to customize the default import alias? … No / Yes // Noで進める
✔ What import alias would you like configured? … @/* // 何も入力せずにEnter
```

これで基本の設定は完了です。それでは、作成したアプリケーションを起動してみましょう。

```bash
cd my-next-app
npm run dev
```

ブラウザで`http://localhost:3000`にアクセスすると、next.js の初期画面が表示されます。

### 補足

next.js は、ディレクトリの名前や構成によってルーティングや様々な設定が自動で行われるため、ディレクトリの名前の構成が重要です。たとえば、以下に重要な設定を記載します。

#### 1 /src

src ディレクトリは、アプリケーションのコードと設定ファイルを切り分けるのに役立ちます。

何を src に入れ、何を src 外に入れるかは以下を参考にしてください。

- https://nextjs.org/docs/app/building-your-application/configuring/src-directory

#### app Router (recommended) と Pages Router

app Router は、ページのルーティングを自動的に行う機能です。従来は Pages Router を使っていましたが、app Router を使うことで、より柔軟なルーティングが可能になり、現在は
app Router が推奨されています。src ディレクトリを使用する場合は、src/app 以下にルーティング用のフォルダやファイルを作成します。
app Router の詳細は以下のリンクを参照してください。

- https://nextjs.org/docs/app/building-your-application/routing/colocation

## サーバサイドコンポーネントとクライアントサイドコンポーネント

next.js の機能ではありませんが、React には Server Side Rendering(SSR)と Client Side Rendering(CSR)があります。
next.js はデフォルトでこの Server Side Rendering をサポートしています。これは、サーバサイドでコンポーネントを描画し、
その結果をクライアントに返すことで、初期表示の高速化や SEO 対策を行うことができます。

しかし、クライアント側でのみ動作するコンポーネントもあります。これをクライアントサイドコンポーネントと呼びます。
クライアントサイドコンポーネントは、サーバサイドでの描画が不要なコンポーネントで、クライアント側でのみ動作するコンポーネントです。
クライアントサイドコンポーネントは、`useEffect`や`useState`を使用することができますが、サーバサイドではこれらの state を利用した
React の機能を使用することができないので、注意が必要です。

next.js では、コンポーネントを作成すると、デフォルトでサーバサイドコンポーネントになってしまいます。
これを体験するために、`src/app/page.tsx`に useState を使用したコンポーネントを作成してみましょう。

```tsx
import { useState } from 'react';


export default function Home() {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
```

簡単ですが、useState を Home component で使用しています。これを実行すると、以下のようなエラーがブラウザで発生します。
Error:
× You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.

````
これは、useStateを使用しているため、サーバサイドコンポーネントでは動作しないというエラーです。このエラーを解消するためには、
ファイルの最初に
```tsx
"use client";
````

と記述することで、クライアントサイドコンポーネントに変更することができます。これで、useState を使用したコンポーネントをクライアントサイドで動作させることができます。
props の受け渡しなど、サーバサイドコンポーネントとクライアントサイドコンポーネントの違いについては以下のリンクを参考にしてください。

参考

- https://zenn.dev/uhyo/books/rsc-without-nextjs
- https://zenn.dev/uhyo/articles/react-server-components-multi-stage
  - uhyo さんの記事で、React Server Components について詳しく解説されています。
- https://zenn.dev/luvmini511/articles/ec0e874a2cc1f1

## 環境変数の読み込み

next.js は環境変数をルートディレクトリに`.env.local`として置くと、自動で node.js の`process.env`に読み込んでくれます。
しかし、next.js はブラウザと node の環境で異なる環境変数の設定をする必要があります。NEXT_PUBLIC の prefix を環境変数名につけることで、
ブラウザ側での環境変数の設定が可能になります。サーバサイドの node は、NEXT_PUBLIC の prefix をつけない環境変数も読み込むことができます。
prefix をつけない場合は、サーバサイドコンポーネントのみで利用することができます。

たとえば、/src/app/page.tsx で以下のように環境変数を呼び出してみます。

```tsx
// "use client";を使わないと、ブラウザのconsoleには表示されず、サーバサイドのconsole・Terminalに表示される
const TEST = process.env.TEST;
const NEXT_PUBLIC_TEST = process.env.NEXT_PUBLIC_TEST;

console.log("TEST", TEST);
console.log("NEXT_PUBLIC_TEST", NEXT_PUBLIC_TEST);

// "use client";を使うと、ブラウザのconsoleに表示され、サーバサイドのconsole・Terminalには表示されない. さらに、prefixがNEXT_PUBLICのものは表示されないとわかる

/*
以下のように表示される
TEST undefined
page.tsx:9 NEXT_PUBLIC_TEST test_public
*/
```

- プロジェクトのルートに`.env.local`ファイルを作成します。

```bash
TEST=test_global
NEXT_PUBLIC_TEST=test_public


```

参考

- https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables
- https://zenn.dev/kibe/articles/7c09742400aa66

## Layout について
