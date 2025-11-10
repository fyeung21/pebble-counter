export default function Card() {
  return (
    <article className="border-2 border-pink-400 w-60">
      <h3>{"toothpaste"}</h3>
      <button className="border-2 border-blue-400">+ {"1"} button</button>
      <p>clicked: {1}</p>
      <p>date logged: {"Nov 9, 1:10am"}</p>
    </article>
  );
}
