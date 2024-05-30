"use client";

import { useState, useEffect } from "react";

import Document from "@/components/Document";
import { title } from "process";

const references = [
  {
    title: "React Documentation",
    url: "https://react.dev/reference/react/useEffect",
  },
  {
    title: "React hooksを基礎から理解する (useEffect編)",
    url: "https://qiita.com/ryokkkke/items/4d4b536f3c5c2f1d4d8c",
  },
];

export default function Effect() {
  // ReactのState
  const [countState, setCount] = useState(10);
  const [pushed, setPushed] = useState(false);
  // useEffectは最初にマウントされた時も実行される
  useEffect(() => {
    if (pushed) {
      const interval = setInterval(() => {
        setCount(countState - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [countState, pushed]);

  useEffect(() => {
    if (countState < 0) {
      setCount(10);
      setPushed(false);
    }
  }, [countState]);

  const countStart = () => {
    setCount((prevCount) => prevCount - 1);
    setPushed(true);
  };

  return (
    <div className="">
      <Document title="useEffect" technologies={[]} references={references}>
        <div className="leading-relaxed">
          ReactのuseEffectについて学びます。useEffectは
          <code>useEffect(setup, dependencies?);</code>
          の構文で定義され、第一引数には処理、第二引数には依存配列が入ります。
          useEffectは依存配列に含まれるStataが変化したとき、Componentが再レンダリングされた後に、setupで定義した関数
          を実行します。外部APIとの通信やDOMの操作など副作用を持つUI構築以外の処理を行う際に使われます。
          <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
            <code>
              {`
  useEffect(() => {
    // effect
    return () => {
      // cleanup
    }
  }
              `}
            </code>
          </pre>
          <p>
            そもそも副作用のあるReactの処理とはなんでしょうか。最も簡単なものは、Stateの更新に合わせてComponentが再レンダリングされるものです。
          </p>
        </div>
        useEffectを使ったカウントダウンの実装を見てみましょう。
        <div className="my-4">
          <h2 className="text-xl font-bold text-gray-800">Count Down</h2>
          <p className="text-lg text-gray-600">Count: {countState}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={countStart}
          >
            Start
          </button>
        </div>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
          <code>
            {`
  const [countState, setCount] = useState(10);
  const [pushed, setPushed] = useState(false);
  useEffect(() => {
    if (pushed) {
      const interval = setInterval(() => {
        setCount(countState - 1);
      }
      return () => {
        clearInterval(interval);
      }
    }
  }, [countState, pushed]);
  useEffect(() => {
    if (countState < 0) {
      setCount(10);
      setPushed(false);
    }
  }

  const countStart = () => {
    setCount((prevCount) => prevCount - 1);
    setPushed(true);
  }

  <button>onClick={countStart}>Start</button>
              `}
          </code>
        </pre>
      </Document>
    </div>
  );
}
