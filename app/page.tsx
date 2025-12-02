import React from "react";
import Counter from "../components/Counter";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Type-safe Counter Demo</h1>

      <section style={{ marginTop: 18 }}>
        <h2>Counter with initial = 5</h2>
        <Counter initial={5} />
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Counter with initial = 0</h2>
        <Counter initial={0} />
      </section>
    </main>
  );
}