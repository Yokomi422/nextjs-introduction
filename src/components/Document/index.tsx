"use client";

import { ReactNode } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface DocumentProps {
  title: string;
  children: ReactNode;
  technologies?: { name: string; description: string }[];
}

export default function Document({
  title,
  children,
  technologies,
}: DocumentProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <div className="bg-sky-300 p-4 m-12 text-center border border-react-dark-blue rounded-lg w-full max-w-3xl">
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex items-center text-blue-500 hover:text-blue-700"
          >
            <FaArrowLeft className="mr-2" />
          </button>
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="w-8" /> {/* Empty div to balance the layout */}
        </div>
      </div>
      <div className="w-full max-w-3xl bg-white p-6 border border-gray-300 shadow-lg rounded-lg">
        {children}
        {technologies && (
          <>
            <h2 className="mt-8 text-lg font-bold">使われた技術</h2>
            <ul className="list-disc list-inside mt-4">
              {technologies.map((tech, index) => (
                <li key={index}>
                  <strong>{tech.name}</strong>: {tech.description}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
