"use client";

import { useState } from "react";
import Link from "next/link";

import Document from "@/components/Document";

const technologies = [
  {
    name: "useState",
    description:
      "Reactのフックの一つで、コンポーネント内で状態を管理するために使われます。",
  },
  {
    name: "next/navigation",
    description:
      "Next.jsのカスタムフックで、ルーティングを簡単に実装するために使います。",
  },
  {
    name: "react-icons",
    description:
      "様々なアイコンをReactコンポーネントとして使用できるライブラリです。今回は、FaArrowLeftアイコンを使用しました。",
  },
  {
    name: "Tailwind CSS",
    description:
      "ユーティリティファーストのCSSフレームワークで、迅速にスタイルを適用するために使われます。",
  },
];

const references = [
  {
    title: "React Documentation",
    url: "https://reactjs.org/docs/getting-started.html",
  },
  {
    title: "Next.js Documentation",
    url: "https://nextjs.org/docs",
  },
  {
    title: "Tailwind CSS Documentation",
    url: "https://tailwindcss.com/docs",
  },
  {
    title: "react-icons Documentation",
    url: "https://react-icons.github.io/react-icons/",
  },
];

export default function State() {
  // local変数
  let count = 0;
  const increment = () => {
    count += 1;
  };

  // ReactのState
  const [countState, setCount] = useState(0);
  return (
    <div className="">
      <Document
        title="React State"
        technologies={technologies}
        references={references}
      >
        <p className="leading-relaxed">
          ReactのStateについて学びます。StateはReact
          Component間でのデータの受け渡しや、レンダリング間でのデータの保持、そして
          再レンダリングのトリガーとなるデータです。
        </p>

        <p>
          Stateを使わない例を見てみましょう。そこで簡単なカウンターを作成します。
        </p>
        {/** buttonを真ん中にするには、flex  justify-center*/}
        <div className="flex items-center justify-center space-x-4 m-">
          <button
            onClick={increment}
            className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Increment
          </button>
          <p className="text-xl">{count}</p>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
          <code>
            {`
let count = 0;
const increment = () => {
  count += 1;
};

<button onClick={increment}>Increment</button>
          `}
          </code>
        </pre>
        <div className="mt-4 leading-relaxed">
          Incrementを押しても、数字は更新されません。問題は2点あります。
          <ul className="list-disc pl-5 text-left">
            <li>local変数は再レンダリングのトリガーにならない。</li>
            <li>local変数はレンダリング間でデータが共有されない。</li>
          </ul>
          <p>
            つまり、ボタンを押しても再レンダリングされないので、数字が更新されても画面に反映されません。また、もしも再レンダリングされたとしても、
            local変数はレンダリング間のコンポーネント間でデータが共有されないので、0のままです。
          </p>
          <p>
            これらの問題を解決するために、ReactのStateを使います。Stateはコンポーネント内で管理されるデータで、コンポーネント間でデータを共有し、
            再レンダリングをトリガーすることができます。
          </p>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto leading-relaxeds">
          <code>
            {`
import { useState } from "react";
const [count, setCount] = useState(0);
const increment = () => {
  setCount(count + 1);
};
          `}
          </code>
        </pre>
        <div className="flex items-center justify-center space-x-4 m-4">
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Increment
          </button>
          <p className="text-xl">{countState}</p>
        </div>
        <p>
          このボタンでは、useStateを使ってカウンターを作成しているので、クリックするたびにカウンターが増加します。
          useStateの第一引数は初期値で、第二引数はStateを更新する関数です。Stateを更新する関数は、新しいStateを引数に取ります。
          実は、ソースコードの方は、こちらの更新関数とは別の実装をしています。何が違うのか、考えてみましょう。
        </p>
        <p>
          ここからは少し詳細に入ってみます。useStateはComponentに属しており、Stateが更新されるとそのコンポーネントとそれ以下のコンポーネントが
          再帰的に再レンダリングされます。これを視覚的にみるために、
          <Link
            href="https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ja"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
          >
            React Developer Tool
          </Link>
          を使ってみましょう。
        </p>
        <p>
          ReactのStateはまだまだたくさんの注意点や応用があります。詳しくは公式ドキュメント
          <Link
            href="https://react.dev/reference/react/useState"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-500 hover:text-blue-700"
          >
            公式ドキュメント
          </Link>
          を参照してください。
        </p>
      </Document>
    </div>
  );
}
