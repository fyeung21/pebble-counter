"use client";

import { useState } from "react";

export type CardProps = {
  title: string;
  increment: number;
};

export default function Card({ title, increment }: CardProps) {
  const [onClick, setonClick] = useState(0);

  const handleClick = () => {
    setonClick(onClick + increment);
    Date();
  };

  return (
    <article className="border-2 border-pink-400 w-60">
      <h3>{title}</h3>
      <button onClick={handleClick} className="border-2 border-blue-400">
        + {increment} button
      </button>
      <p>clicked: {onClick}</p>
      <p>{Date()}</p>
    </article>
  );
}
