import Image from "next/image";
import Card, { CardProps } from "@/components/Card";
import { reactCards, nextJsCards } from "@/app/contents/home";

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
