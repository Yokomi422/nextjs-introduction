import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface CardProps {
  title: string;
  description: string;
  link: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="p-4 m-12 border border-gray-300 shadow-lg rounded-lg">
      <h1 className="font-bold text-center border-b border-gray-300 pb-2 mb-4">
        {props.title}
      </h1>
      <p className="p-8 text-center">{props.description}</p>
      <Link href={props.link}>
        <div className="text-center text-blue-500 hover:text-blue-700 flex items-center justify-center">
          Learn now!
          <FaExternalLinkAlt className="ml-2" />
        </div>
      </Link>
    </div>
  );
}
