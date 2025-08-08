import React from "react";
import { PageTransition } from "./components/PageTransition";

const sampleItems = [
  {
    link: "https://example.com/page1",
    title: "Card One",
    description: "Description for card one.",
  },
  {
    link: "https://example.com/page2",
    title: "Card Two",
    description: "Description for card two.",
  },
  {
    link: "https://example.com/page3",
    title: "Card Three",
    description: "Description for card three.",
  },
];

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen p-10">
      <h1 className="text-white text-3xl mb-6">Page Transition Example</h1>
      <PageTransition items={sampleItems} />
    </div>
  );
}
