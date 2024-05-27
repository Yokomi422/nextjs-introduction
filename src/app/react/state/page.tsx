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

export default function State() {
  return (
    <Document title="React State" technologies={technologies}>
      <p>
        Reactのstateについて学びます。stateはReactのコンポーネントの状態を管理するための仕組みです。
      </p>
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
        <code>
          {`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;`}
        </code>
      </pre>
    </Document>
  );
}
