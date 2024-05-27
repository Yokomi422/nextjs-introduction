import Image from "next/image";
import Card, { CardProps } from "@/components/Card";

const reactCards: CardProps[] = [
  {
    link: "/react/state",
    title: "React",
    description:
      "Reactにまつわる技術を体験してもらいます。例えば、stateやuseEffectなどReact固有な機能をハンズオン形式で体験してもらいます。",
  },
  {
    link: "/react/useeffect",
    title: "React Advanced",
    description:
      "コンテキストAPIやReact Routerなどの高度なReactの機能を学びます。",
  },
];

const nextJsCards: CardProps[] = [
  {
    link: "/next/dynamic-routing",
    title: "Next.js",
    description:
      "ここではNext.jsにまつわる技術を体験してもらいます。例えば、dynamic-routingやAppRouterなどNext.js固有な機能をハンズオン形式で体験してもらいます。",
  },
  {
    link: "/next/api-routes",
    title: "Next.js Advanced",
    description:
      "Server-side RenderingやAPI Routesなどの高度なNext.jsの機能を学びます。",
  },
];

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="bg-sky-300 p-4 m-12 text-center border border-react-dark-blue rounded-lg">
            React
          </h1>
          {reactCards.map((props, index) => (
            <Card key={index} {...props} />
          ))}
        </div>
        <div>
          <h1 className="bg-fuchsia-700 p-4 m-12 text-center border border-nextjs-dark-gray  rounded-lg">
            Next.js
          </h1>
          {nextJsCards.map((props, index) => (
            <Card key={index} {...props} />
          ))}
        </div>
      </div>
    </>
  );
}
