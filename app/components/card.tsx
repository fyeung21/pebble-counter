"use client";

import { useState } from "react";

export default function Card() {
  const [onClick, setonClick] = useState(0);

  const handleClick = () => {
    setonClick(onClick + 1);
  };
  return (
    <article className="border-2 border-pink-400 w-60">
      <h3>{"toothpaste"}</h3>
      <button onClick={handleClick} className="border-2 border-blue-400">
        + {"1"} button
      </button>
      <p>clicked: {onClick}</p>
      <p>date logged: {"Nov 9, 1:10am"}</p>
    </article>
  );
}
