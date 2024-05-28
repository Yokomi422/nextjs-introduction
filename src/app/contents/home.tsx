import Card, { CardProps } from "@/components/Card";

export const reactCards: CardProps[] = [
  {
    title: "Reactの思想",
    description: "Reactの思想について学びます。",
    link: "/react/philosophy",
  },
  {
    title: "State",
    description: "Reactの基本であるstateの使い方を学びます。",
    link: "/react/state",
  },
  {
    title: "useEffect",
    description: "Reactの副作用を扱うuseEffectの使い方を学びます。",
    link: "/react/useeffect",
  },
];

export const nextJsCards: CardProps[] = [
  {
    link: "/next/dynamic-routing",
    title: "dymamic-routing",
    description: "Next.jsのdynamic-routingについて学びます。",
  },
  {
    link: "/next/api-routes",
    title: "Api routes",
    description: "Next.jsのAPI routesについて学びます。",
  },
];
