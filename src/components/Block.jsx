import Reveal from "./Reveal.jsx";

// A page section: a sticky label on the left and the content on the right.
export default function Block({ id, num, title, alt, children }) {
  return (
    <section className={`block ${alt ? "alt" : ""}`} id={id}>
      <div className="block-in wrap">
        <div className="label"><i>{num}</i>{title}</div>
        <Reveal className="body">{children}</Reveal>
      </div>
    </section>
  );
}
